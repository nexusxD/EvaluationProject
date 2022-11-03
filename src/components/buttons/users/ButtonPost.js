import classes from "./ButtonPost.module.css";
import { useState } from "react";
import ModalUserForm from "../../UI/Users/Modals/ModalUserForm";
import Backdrop from "../../UI/Backdrop";

const ButtonPost = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function postHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={classes.div1} >
      <button className={classes.button} onClick={postHandler}>Post</button>
      {modalIsOpen && <ModalUserForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};

export default ButtonPost;
