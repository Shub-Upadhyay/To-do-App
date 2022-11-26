import React from "react";
import "../App.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Todo = ({ todo,handlestatus,handledelete }) => {
  return (
    <div className="tododiv">
      <Droppable droppableId="todo">
        {(provided, snapshot) => {
          return (
            <>
            <h1 className="head">Todo</h1>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="boxdiv"
            >
              {todo.map((el, index) => {
                return (
                  <Draggable
                    key={el.id + el.first_name}
                    draggableId={`${el.id+"2"}`}
                    index={index}
                    
                  >
                    {(provided) => (
                      <div
                        className="box"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="mapcomponent">
                          <h1>{index+1}</h1>
                          <h4>{el.first_name}</h4>
                          <h4>{el.time}</h4>
                        </div>
                        <div className="buttondiv">
                          <button id="status" onClick={()=>handlestatus(el,"todo")}>Mark as Completed</button>
                          <button onClick={() => handledelete(el, "todo")}>Delete</button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
            </>

            
          );
        }}
      </Droppable>
    </div>
  );
};

export default Todo;
