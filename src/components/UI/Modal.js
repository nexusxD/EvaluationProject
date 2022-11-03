import classes from "./Modal.module.css";
function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;