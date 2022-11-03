import Card from "./components/UI/Card";
import ButtonGet from "./components/buttons/users/ButtonGet";
import ButtonGetId from "./components/buttons/users/ButtonGetId";
import ButtonPost from "./components/buttons/users/ButtonPost";
import ButtonPut from "./components/buttons/users/ButtonPut";
import ButtonDelete from "./components/buttons/users/ButtonDelete";
import ButtonGetItem from "./components/buttons/items/ButtonGetItem";
import ButtonGetIdItem from "./components/buttons/items/ButtonGetIdItem";
import ButtonPostItem from "./components/buttons/items/ButtonPostItem";
import ButtonPutItem from "./components/buttons/items/ButtonPutItem";
import ButtonDeleteItem from "./components/buttons/items/ButtonDeleteItem";

function App() {
  return (
    <section>
      <Card>
        <h1>Users</h1>
        <ButtonGet/>
        <ButtonGetId/>
        <ButtonPost/>
        <ButtonPut/>
        <ButtonDelete/>
      </Card>
      <Card>
        <h1>Items</h1>
        <ButtonGetItem/>
        <ButtonGetIdItem/>
        <ButtonPostItem/>
        <ButtonPutItem/>
        <ButtonDeleteItem/>
      </Card>
    </section>
  );
}

export default App;
