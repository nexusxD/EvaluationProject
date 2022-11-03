import classes from "./UserUnit.module.css";
import Card from "../UI/Card";
const UserUnit = (props) => {
  return (
    <section>
      <Card>
        <li className={classes.unit}>
          <div className={classes.content}>
            <h6>{props.Name}</h6>
            <p>Email: {props.Email}</p>
            <p>Phone: {props.Phone}</p>
            <p>Type: {props.Type}</p>
          </div>
        </li>
      </Card>
    </section>
  );
};

export default UserUnit;
