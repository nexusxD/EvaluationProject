import classes from "./ButtonGetItem.module.css";
import { useState } from "react";
import ModalItemFull from "../../UI/Items/Modals/ModalItemFull";
import Backdrop from "../../UI/Backdrop";

const ButtonGetItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function getHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={classes.div1}>
      <button className={classes.button} onClick={getHandler}>
        Get
      </button>
      {modalIsOpen && <ModalItemFull onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonGetItem;
