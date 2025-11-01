import React from "react";
import { DragDropContext,Droppable, Draggable } from "@hello-pangea/dnd";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';

// use import which ever works by uncommenting


export default function TaskTable({tasks,onDelete,onDragEnd}){

    const navigate = useNavigate();

   return (
    <DragDropContext onDragEnd={onDragEnd}>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <Droppable droppableId="tasks">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {tasks
              .filter(task => task && task.id !== undefined)
              .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="align-middle"
        >
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>{task.dueDate}</td>
          <td>
            <button
            type="button"
             className="btn btn-secondary btn-sm me-2"
             onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                Edit
            </button>
            <button
            type="button"
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </Draggable>
))}

              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
    </DragDropContext>
  );
}