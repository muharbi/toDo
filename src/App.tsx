import "./styles/App.scss";
import { Text } from "./components/Text/Text";
import { InputB } from "./components/InputB/ColumnForm";
import { Line } from "./components/Line/Line";

function App() {
  return (
    <div className="container">
      <Text />
      <InputB />
      <Line />
    </div>
  );
}

export default App;
