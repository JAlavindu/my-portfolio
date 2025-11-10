import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function ParticleAnimation() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Detect mobile device and adjust settings accordingly
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      alpha: true,
      powerPreference: "high-performance", // Use high-performance mode
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    container.appendChild(renderer.domElement);

    // Particle system - Reduce count on mobile devices
    const particleCount = isMobile ? 5000 : isTablet ? 10000 : 18000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Color palette - White, Warm White, and Orange tones
    const colorPalette = [
      new THREE.Color(1, 1, 1), // Pure White
      new THREE.Color(1, 1, 1), // Pure White (more weight)
      new THREE.Color(1, 0.95, 0.9), // Warm White
      new THREE.Color(1, 0.9, 0.8), // Warmer White
      new THREE.Color(1, 0.7, 0.4), // Light Orange
      new THREE.Color(1, 0.6, 0.3), // Orange
      new THREE.Color(1, 0.5, 0.2), // Bright Orange
      new THREE.Color(0.95, 0.65, 0.4), // Subtle Orange
    ];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Position
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;

      // Velocity for floating motion
      velocities[i3] = (Math.random() - 0.5) * 0.5;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.3;

      // Color
      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 2 + 1;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Particle material with glow
    const particleMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      map: createCircleTexture(),
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create circle texture for particles
    function createCircleTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");

      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,0.8)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    // Connection lines with warm orange tone
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffa366, // Warm orange color
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse/Touch interaction
    const handleMouseMove = (event) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        mouseRef.current.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.targetY =
          -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    // Only add mouse interaction on non-mobile devices for better performance
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    // Animation
    let time = 0;
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      time += delta;

      // Smooth mouse following
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const positions = particles.attributes.position.array;
      const linePositions = [];

      // Update particles
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Floating motion with Perlin-like noise
        positions[i3] += velocities[i3] + Math.sin(time + i * 0.01) * 0.1;
        positions[i3 + 1] +=
          velocities[i3 + 1] + Math.cos(time + i * 0.01) * 0.1;
        positions[i3 + 2] += velocities[i3 + 2] * 0.5;

        // Mouse interaction - repulsion effect
        const dx = positions[i3] - mouseRef.current.x * 1000;
        const dy = positions[i3 + 1] - mouseRef.current.y * 1000;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          positions[i3] += dx * force * 0.5;
          positions[i3 + 1] += dy * force * 0.5;
        }

        // Boundary check
        if (positions[i3] > 1000) positions[i3] = -1000;
        if (positions[i3] < -1000) positions[i3] = 1000;
        if (positions[i3 + 1] > 1000) positions[i3 + 1] = -1000;
        if (positions[i3 + 1] < -1000) positions[i3 + 1] = 1000;
        if (positions[i3 + 2] > 500) positions[i3 + 2] = -500;
        if (positions[i3 + 2] < -500) positions[i3 + 2] = 500;
      }

      // Create connection lines
      for (let i = 0; i < particleCount; i += 10) {
        const i3 = i * 3;

        for (let j = i + 1; j < particleCount; j += 10) {
          const j3 = j * 3;

          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 150) {
            linePositions.push(
              positions[i3],
              positions[i3 + 1],
              positions[i3 + 2],
              positions[j3],
              positions[j3 + 1],
              positions[j3 + 2]
            );
          }
        }
      }

      particles.attributes.position.needsUpdate = true;

      // Update lines
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // Gentle rotation
      particleSystem.rotation.y = time * 0.05;
      particleSystem.rotation.x = Math.sin(time * 0.1) * 0.1;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("touchmove", handleTouchMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particles.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <>
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Three.js container */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-5"
        style={{ opacity: 0.95 }}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
    </>
  );
}

export default ParticleAnimation;
