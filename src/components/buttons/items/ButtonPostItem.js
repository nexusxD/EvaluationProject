import classes from "./ButtonPostItem.module.css";
import { useState } from "react";
import ModalItemForm from "../../UI/Items/Modals/ModalItemForm";
import Backdrop from "../../UI/Backdrop";

const ButtonPostItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function postHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={classes.div1}>
      <button className={classes.button} onClick={postHandler}>Post</button>
      {modalIsOpen && <ModalItemForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonPostItem;
