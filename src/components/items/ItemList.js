import ItemUnit from "./ItemUnit";
import classes from "./ItemList.module.css";

const UserList = (props) => {
  return(
    <ul className={classes.list}>
      {props.items.map((item)=>(
        <ItemUnit
          key={item.ItemId}
          ItemId={item.ItemId}
          Name={item.Name}
          Description={item.Description}
          Quantity={item.Quantity}
          UserId={item.UserId}
          />
      ))}

    </ul>
  );
};

export default UserList;