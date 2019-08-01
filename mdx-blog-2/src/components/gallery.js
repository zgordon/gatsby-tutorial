import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"

const Gallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <ModalGateway>
      {modalIsOpen ? (
        <Modal onClose={setModalIsOpen(!modalIsOpen)}>
          <Carousel views={images} />
        </Modal>
      ) : null}
    </ModalGateway>
  )
}

export default Gallery
