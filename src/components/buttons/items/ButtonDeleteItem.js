import classes from "./ButtonDeleteItem.module.css";
import { useState } from "react";
import ModalItemID from "../../UI/Items/Modals/ModalItemID"
import Backdrop from "../../UI/Backdrop";

const ButtonDeleteItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <button className={classes.button} onClick={deleteHandler}>Delete</button>
      {modalIsOpen && <ModalItemID onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonDeleteItem;
