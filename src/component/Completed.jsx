import React from "react";
import "../App.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Completed = ({ completed, handlestatus, handledelete }) => {
  return (
    <div className="completeddiv">
      <Droppable droppableId="completed">
        {(provided, snapshot) => {
          return (
            <>
              <h1 className="head">Completed Todo</h1>

              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="boxdiv"
              >
                {completed.map((el, index) => {
                  return (
                    <Draggable
                      key={el.id + el.first_name}
                      draggableId={`${el.id + "1"}`}
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
                            <h1>{index + 1}</h1>
                            <h4>{el.first_name}</h4>
                            <h4>{el.time}</h4>
                          </div>
                          <div className="buttondiv">
                            <button
                              onClick={() => handlestatus(el, "completed")}
                            >
                              Mark as Uncomplete
                            </button>
                            <button
                              onClick={() => handledelete(el, "completed")}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            </>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Completed;
