import UserUnit from "./UserUnit";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return(
    <ul className={classes.list}>
      {props.users.map((user)=>(
        <UserUnit
          key={user.UserId}
          UserId={user.UserId}
          Name={user.Name}
          Email={user.Email}
          Phone={user.Phone}
          Type={user.Type}
          />
      ))}

    </ul>
  );
};

export default UserList;