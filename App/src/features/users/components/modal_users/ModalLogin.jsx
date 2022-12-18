import { Button } from 'primereact/button';
import React, { useState } from 'react'
import FormLogin from '../forms/login/FormLogin'
import { Dialog } from "primereact/dialog";

const ModalLogin = () => {
    const [showModal, setShowModal] = useState(false);

    const mostartModal = () => {
      setShowModal(true)
    }
  
  return (
    <div>
      <Button
        label="Login"
        icon="pi pi-users"
        onClick={mostartModal}
      />

      <Dialog onHide={() => { setShowModal(false) }} modal visible={showModal}>
        <FormLogin />
      </Dialog>
    </div>
  )
}

export default ModalLogin
