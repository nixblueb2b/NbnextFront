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
              <li className={`flex py-2 items-center rounded ${index === 0 && "mb-5"}`}>
                <div>{option.htmlComponent}</div>
              </li>
            );
          })}
        </ul>
      </Sidebar>
    </div>
  );
}
