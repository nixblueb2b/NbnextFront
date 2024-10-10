//La card solo acepta imagen descripcion y un btn de redireccion (ya es un componente)
import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const SimpleCard = () => {
  const header = (
    <div className="p-3">
      <img
        className="rounded-xl w-full"
        alt="Card"
        src="/images/supplier1.png"
      />
    </div>
  );
  const footer = (
    <>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        severity="secondary"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title="Proveedor"
        // subTitle="Card subtitle"
        footer={footer}
        header={header}
        className="w-80"
      >
        <p className="m-0">
          Si eres productor, proveedor o vendedor mayorista
        </p>
      </Card>
    </div>
  );
};

export default SimpleCard;
