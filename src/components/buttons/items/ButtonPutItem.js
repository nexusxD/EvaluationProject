import classes from "./ButtonPutItem.module.css";
import { useState } from "react";
import ModalItemForm from "../../UI/Items/Modals/ModalItemForm";
import Backdrop from "../../UI/Backdrop";

const ButtonPutItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function putHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={classes.div1}>
      <button className={classes.button} onClick={putHandler}>Put</button>
      {modalIsOpen && <ModalItemForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonPutItem;
