import classes from "./ButtonGetId.module.css";
import { useState } from "react";
import ModalUserID from "../../UI/Users/Modals/ModalUserID";
import Backdrop from "../../UI/Backdrop";

const ButtonGetId = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function getIDHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={classes.div1}>
      <button className={classes.button} onClick={getIDHandler}>Get by ID</button>
      {modalIsOpen && <ModalUserID onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonGetId;
