import React, { useEffect, useRef } from "react";

function ImageParticleBorder() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Position particles around the border
        const side = Math.floor(Math.random() * 4);
        switch (side) {
          case 0: // Top
            this.x = Math.random() * canvas.width;
            this.y = 0;
            break;
          case 1: // Right
            this.x = canvas.width;
            this.y = Math.random() * canvas.height;
            break;
          case 2: // Bottom
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            break;
          case 3: // Left
            this.x = 0;
            this.y = Math.random() * canvas.height;
            break;
        }

        this.targetX = this.x;
        this.targetY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;

        // Random color from orange/white palette
        const colors = [
          { r: 255, g: 255, b: 255 }, // White
          { r: 255, g: 200, b: 150 }, // Warm white
          { r: 255, g: 150, b: 100 }, // Light orange
          { r: 255, g: 120, b: 50 }, // Orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Movement along the border
        this.progress = Math.random();
      }

      update() {
        // Move along the border perimeter
        this.progress += this.speed * 0.001;
        if (this.progress > 1) this.progress = 0;

        const perimeter = (canvas.width + canvas.height) * 2;
        const distance = this.progress * perimeter;

        if (distance < canvas.width) {
          // Top edge
          this.x = distance;
          this.y = 0;
        } else if (distance < canvas.width + canvas.height) {
          // Right edge
          this.x = canvas.width;
          this.y = distance - canvas.width;
        } else if (distance < canvas.width * 2 + canvas.height) {
          // Bottom edge
          this.x = canvas.width - (distance - canvas.width - canvas.height);
          this.y = canvas.height;
        } else {
          // Left edge
          this.x = 0;
          this.y =
            canvas.height - (distance - canvas.width * 2 - canvas.height);
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;

        // Draw particle
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles
    const particles = Array.from({ length: 60 }, () => new Particle());

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(255, 150, 80, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default ImageParticleBorder;
