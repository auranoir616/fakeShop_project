import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react'
import { UseStateContext } from '../store/ContextProvider'

function ConfirmModal() {
  const [open, setOpen] = React.useState(false)
  const {setNotification} = UseStateContext()
    const confirm = ()=>{
      setOpen(false)
      setNotification("payment success! thank you... :)")
      setTimeout(()=>{
        window.location.href = '/'
        localStorage.clear()
      },3000)
    }
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Confirm payment</Button>}
    >

      <ModalHeader>Confirm?</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Lorem ipsum dolor</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, recusandae eius odio quasi eligendi voluptatum porro
             officiis assumenda minima commodi non aut repellendus deleniti doloremque. Facere corrupti sit saepe ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color='black' onClick={() => setOpen(false)}>
          cancel
        </Button>
        <Button
          content="Confirm"
          labelPosition='right'
          icon='checkmark'
          onClick={confirm}
          positive
        />
      </ModalActions>
    </Modal>
  )
}

export default ConfirmModal