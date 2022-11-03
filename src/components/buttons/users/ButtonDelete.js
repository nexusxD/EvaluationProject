import classes from "./ButtonDelete.module.css";
import { useState } from "react";
import ModalUserID from "../../UI/Users/Modals/ModalUserID";
import Backdrop from "../../UI/Backdrop";

const ButtonDelete = (props) => {
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
      {modalIsOpen && <ModalUserID onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonDelete;
