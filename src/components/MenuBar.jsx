import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/Menubar";

function MenuBar() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default MenuBar;
