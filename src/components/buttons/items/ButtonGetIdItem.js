import classes from "./ButtonGetIdItem.module.css";
import { useState } from "react";
import ModalItemID from "../../UI/Items/Modals/ModalItemID";
import Backdrop from "../../UI/Backdrop";

const ButtonGetIdItem = (props) => {
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
      {modalIsOpen && <ModalItemID onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonGetIdItem;
