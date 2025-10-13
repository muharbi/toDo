import { useState } from "react";
import "./styles/App.scss";
import { Text } from "./components/Text/Text";
import { InputB } from "./components/InputB/InputB";
import { Line } from "./components/Line/Line";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (!inputValue.trim()) return;
    const newArray = [inputValue, ...tasks];
    setTasks(newArray);
    setInputValue("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  console.log("tasks", tasks);
  console.log("inputValue", inputValue);

  return (
    <div className="container">
      <Text />
      <InputB
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={addTask}
      />

      <Line />

      {tasks.map((task, index) => (
        <ListItem key={index} text={task} onDelete={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default App;
