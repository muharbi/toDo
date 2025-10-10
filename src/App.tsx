import "./styles/App.scss";
import { Text } from "./components/Text/Text";
import { InputB } from "./components/InputB/ColumnForm";
import { Line } from "./components/Line/Line";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  return (
    <div className="container">
      <Text />
      <InputB />
      <Line />
      <ListItem />
    </div>
  );
}

export default App;
