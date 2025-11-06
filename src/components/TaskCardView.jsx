import React from "react";
import { useNavigate } from "react-router-dom";

export default function TaskCardView({ tasks, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <div className="row g-3">
        {tasks.length === 0 && (
          <p className="text-muted">No tasks available.</p>
        )}

        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 d-flex">
            <div className="card h-100 shadow-sm flex-fill">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text text-muted">{task.description}</p>
                <p className="card-text">
                  <strong>Status:</strong> {task.status}
                </p>
                <p className="card-text">
                  <strong>Due:</strong>{" "}
                  {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
