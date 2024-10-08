import React from "react";
import { BtnRedirect, BtnRedirectIcon } from "@/app/ui/shared/components";

function NavigationBar() {
  return (
    <div className="flex items-center">
      <BtnRedirectIcon
        icon="pi pi-shopping-cart"
        severity="secondary"
        rounded
        text
        aria-label="Filter"
        href="/home"
      />
      <BtnRedirectIcon
        icon="pi pi-user-plus"
        severity="secondary"
        rounded
        text
        aria-label="Filter"
        href="/home"
      />
      <span className="ml-2.5">
        <BtnRedirect
          label="Ingresar"
          icon="pi pi-sign-in"
          size="small"
          iconPos="right"
          href="/home"
          severity="secondary"
          outlined
        />
      </span>
    </div>
  );
}

export default NavigationBar;
