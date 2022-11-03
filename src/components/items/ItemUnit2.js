import classes from "./ItemUnit.module.css";
import Card from "../UI/Card";
const ItemUnit = (props) => {
  return (
    <section>
      <Card>
        <li className={classes.unit}>
          <div className={classes.content}>
            <h6>{props.item.Name}</h6>
            <p>Description: {props.item.Description}</p>
            <p>Quantity: {props.item.Quantity}</p>
            <p>Owner (UserID): {props.item.UserId}</p>
          </div>
        </li>
      </Card>
    </section>
  );
};

export default ItemUnit;