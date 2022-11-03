import { useState } from "react";
import ModalUserFull from "../../UI/Users/Modals/ModalUserFull";
import Backdrop from "../../UI/Backdrop";
import classes from "./ButtonGet.module.css";

const ButtonGet = (props) => {
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
      {modalIsOpen && <ModalUserFull onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonGet;
