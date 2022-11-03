import classes from "./ModalUserFull.module.css";
import UserList from "../../../users/UserList";

function ModalUserFull(props) {
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
      <p>Users List</p>
      <UserList users={Dummy_Files}/>
      <button className="" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalUserFull;