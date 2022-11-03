import classes from "./UserUnit.module.css";
import Card from "../UI/Card";
const UserUnit = (props) => {
  return (
    <section>
      <Card>
        <li className={classes.unit}>
          <div className={classes.content}>
            <h6>{props.user.Name}</h6>
            <p>Email: {props.user.Email}</p>
            <p>Phone: {props.user.Phone}</p>
            <p>Type: {props.user.Type}</p>
          </div>
        </li>
      </Card>
    </section>
  );
};

export default UserUnit;
