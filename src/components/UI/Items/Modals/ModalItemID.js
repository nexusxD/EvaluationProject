import classes from "./ModalItemID.module.css";
import ItemUnit2 from "../../../items/ItemUnit2";
import ItemID from "../../../items/ItemID";
function ModalItemID(props) {
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
      <p>Item ID</p>
      <ItemID/>
      <ItemUnit2 item={Dummy_Files[0]}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalItemID;