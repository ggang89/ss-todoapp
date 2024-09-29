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
    
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const editBtn = (id) => {
    const newArr = todoList.map((t) => {
      if (t.id === id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

  const handleTodo = (e, id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

  const delBtn = (id) => {
    const newArr = todoList.filter((t) => (id !== t.id));
    setTodoList(newArr);
  }
  return (
    <>
      <Todoinput input={input} handleInput={handleInput} addBtn={addBtn} />

      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <Todolist 
              isEditing={t.isEditing}
              handleTodo={(e) => { handleTodo(e, t.id) }}
              todotitle={t.todoTitle}
              editBtn={() => { editBtn(t.id) }}
              delBtn={()=>delBtn(t.id) } />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
