import Card from "../UI/Card";
import classes from "./ItemID.module.css";


const UserID = () => {
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">ID</label>
          <input type="text" required id="id" />
        </div>
      </form>
    </Card>
  );
};

export default UserID;
