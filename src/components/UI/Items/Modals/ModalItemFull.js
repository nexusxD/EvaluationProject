import classes from "./ModalItemFull.module.css";
import ItemList from "../../../items/ItemList";
function ModalItemFull(props) {
  function cancelHandler() {
    props.onCancel();
  }
  const Dummy_Files = [
    {
      ItemId : 1,
      Name: "Galletas",
      Description: "Galletas Ricas",
      Quantity: 15,
      UserId: 1,
    },
    {
      ItemId : 2,
      Name: "Paletas",
      Description: "De Pollo",
      Quantity: 20,
      UserId: 2,
    },
  ];
  return (
    <div className={classes.modal}>
      <p>Item List</p>
      <ItemList items={Dummy_Files}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalItemFull;