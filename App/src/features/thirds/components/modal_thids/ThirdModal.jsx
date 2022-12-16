import React, { useState } from "react";
import { RegisterThird } from "../forms/register/RegisterThird";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export const ThirdModal = () => {
  const [showModal, setShowModal] = useState(false);

  const mostartModal = () => {
    setShowModal(true)
  }

  return (
    <div>
      <Button
        label="Registrar Tercero"
        icon="pi pi-external-link"
        onClick={mostartModal}
      />

      <Dialog onHide={() => { setShowModal(false) }} modal visible={showModal}>
        <RegisterThird />
      </Dialog>
    </div>
  );
};


