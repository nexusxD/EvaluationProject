import classes from "./ItemUnit.module.css";
import Card from "../UI/Card";
const ItemUnit = (props) => {
  return (
    <section>
      <Card>
        <li className={classes.unit}>
          <div className={classes.content}>
            <h6>{props.Name}</h6>
            <p>Description: {props.Description}</p>
            <p>Quantity: {props.Quantity}</p>
            <p>Owner (UserID): {props.UserId}</p>
          </div>
        </li>
      </Card>
    </section>
  );
};

export default ItemUnit;