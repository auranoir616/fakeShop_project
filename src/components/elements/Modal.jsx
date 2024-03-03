import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'
import { UseStateContext } from "../store/ContextProvider"

function ModalDetail(id) {
    const {detail,open, setOpen,loading} = UseStateContext()
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    //   trigger={<Button id={id} onClick={viewDetail}>Show Modal</Button>}
    >
      <ModalHeader>Product Details</ModalHeader>
    {loading && 
        <p className='text-3xl font-extrabold text-center mt-5'>
        loading...
        </p>
    }
    {!loading && 
      <ModalContent image>
        <Image size='medium' src={detail.image} />
        <ModalDescription>
          <Header>{detail.title}</Header>
          <p>{detail.description}</p>
          <hr />
          <p><b>Category : </b>{detail.category}</p>
          <p><b>Price : </b>${detail.price}</p>
        </ModalDescription>
      </ModalContent>
    }
      <ModalActions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        {/* <Button
          content="Yep, that's me"
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
          /> */}
      </ModalActions>
    </Modal>
  )
}

export default ModalDetail