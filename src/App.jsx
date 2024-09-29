import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addBtn = () => {
    const newTodo = { id: uuidv4(), todoTitle: input, isEditing: false };
    setTodoList([newTodo, ...todoList]);
    setInput("");
    console.log(newTodo);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Todoinput input={input} handleInput={handleInput} addBtn={addBtn} />
      <Todolist />
    </>
  );
}

export default App;
