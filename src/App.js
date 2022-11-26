import "./App.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Todo from "./component/Todo";
import Completed from "./component/Completed";
import { DragDropContext } from "react-beautiful-dnd";
import AddTodo from "./component/AddTodo";
let arr = [
  
];
let arr1 = [
  
];

function App() {
  const [todo, setTodo] = useState(arr);
  const [completed, setCompleted] = useState(arr1);

  const handledragEnd = (result) => {
    let { source, destination } = result;

    if (destination == null) return;
    if (source.droppableId === "todo") {
      if (destination.droppableId === "todo") {
        let removed = todo.splice(source.index, 1);
        todo.splice(destination.index, 0, removed[0]);
        console.log(todo);
        setTodo(todo);
      }
      if (destination.droppableId === "completed") {
        let removed = todo.splice(source.index, 1);
        completed.splice(destination.index, 0, removed[0]);
        console.log(completed);
        setCompleted(completed);
      }
    }

    if (source.droppableId === "completed") {
      if (destination.droppableId === "completed") {
        let removed = completed.splice(source.index, 1);
        completed.splice(destination.index, 0, removed[0]);
        console.log(completed);
        setCompleted(completed);
      }

      if (destination.droppableId === "todo") {
        let removed = completed.splice(source.index, 1);
        todo.splice(destination.index, 0, removed[0]);
        console.log(todo);
        setTodo(todo);
      }
    }
  };

  const handlestatus = (element, group) => {
    if (group === "completed") {
      let newarr = completed.filter((el) => el.id !== element.id);
      setCompleted(newarr);
      let newtodo = [...todo, element];
      setTodo(newtodo);
    }
    if (group === "todo") {
      let newarr = todo.filter((el) => el.id !== element.id);
      setTodo(newarr);
      let newtodo = [...completed, element];
      setCompleted(newtodo);
    }
  };

  const handledelete = (element, group) => {
    if (group === "completed") {
      let newarr = completed.filter((el) => el.id !== element.id);
      setCompleted(newarr);
    }
    if (group === "todo") {
      let newarr = todo.filter((el) => el.id !== element.id);
      setTodo(newarr);
    }
  };

  const handleadd = (data) => {
    data = { ...data, id: uuid(), time: new Date().toLocaleString('en-US') };
    setTodo([...todo, data]);
  };
  return (
    <>
      <AddTodo handleadd={handleadd} />
      <div className="App">
        <DragDropContext onDragEnd={handledragEnd}>
          <Todo
            todo={todo}
            handlestatus={handlestatus}
            handledelete={handledelete}
          />
          <Completed
            completed={completed}
            handlestatus={handlestatus}
            handledelete={handledelete}
          />
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
