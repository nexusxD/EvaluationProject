import classes from "./ModalUserID.module.css";
import UserUnit2 from "../../../users/UserUnit2";
import UserID from "../../../users/UserID";

function ModalUserID(props) {
  function cancelHandler() {
    props.onCancel();
  }

  const Dummy_Files = [
    {
      UserId : 1,
      Name: "Pato",
      Email: "pato@patomail.com",
      Phone: 1234567890,
      Type: "Comprador",
    },
    {
      UserId : 2,
      Name: "Patito",
      Email: "patito@patomail.com",
      Phone: 9876543210,
      Type: "Vendedor",
    },
  ];

  return (
    <div className={classes.modal}>
      <p>User ID</p>
      <UserID/>
      <UserUnit2 user={Dummy_Files[1]}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalUserID;
