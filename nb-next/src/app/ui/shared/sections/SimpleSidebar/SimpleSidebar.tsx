"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import { SidebarHeader } from "@/app/ui/shared/sections";
import { useOpenSidebarStore } from "@/app/stores/user/homeHeaderProvider";


interface htmlElement {
  htmlComponent: JSX.Element;
}

interface SimpleSidebarProps {
  htmlOptions: htmlElement[];
}

export default function SimpleSidebar({
  options,
}: {
  options: SimpleSidebarProps;
}) {

  const { isOpen, closeSidebar } = useOpenSidebarStore(
    (store) => store
  );

  //POSIBLEMENTE HAY QUE CREAR UN ELEMENTO UL LI PARA RENDERIZAR LAS LISTAS Y PONERLES UN HOVER, si hago un hover al li 
  //aqui tidas tienen el hover, hay que crear un componente li para pasarle una prop que diga hover true o false
  return (
    <div className="card flex justify-content-center">
      <Sidebar
        header={ <SidebarHeader />}
        visible={isOpen}
        onHide={() => closeSidebar(false)}
      >
        <ul className="list-none block ">
          {options.htmlOptions.map((option, index) => {
            return (
              <li onClick={()=>closeSidebar(false)} className={`flex py-2 items-center rounded ${index === 0 && "mb-5"}`}>
                <div className="w-full h-full">{option.htmlComponent}</div>
              </li>
            );
          })}
        </ul>
      </Sidebar>
    </div>
  );
}
