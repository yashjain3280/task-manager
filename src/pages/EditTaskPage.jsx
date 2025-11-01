import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, fetchTasks } from '../redux/tasksSlice';
import TaskForm from '../components/TaskForm';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTaskPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.list);
 const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(fetchTasks());
    } else {
      const existingTask = tasks.find((t) => t.id.toString() === id.toString());
      setTask(existingTask || null);
    }
  }, [dispatch, id, tasks]);

  const handleSubmit = async (updatedData) => {
  const actionResult = await dispatch(updateTask({ id, updatedTask: updatedData }));
  // console.log('Update task result:', actionResult);

  if (updateTask.fulfilled.match(actionResult)) {
    navigate('/tasks');
  } else {
    // console.error('Update failed:', actionResult.error);
    setError('Failed to update the task. Please try again.');
  
  }
};
  if (!task) {
    if (tasks.length === 0) {
      return <p className="p-4 container">Loading task...</p>;
    }
    return <p className="p-4 container">Task not found.</p>;
  }

  return (
    <div  className="container p-4 my-4">
      <h1 className="h3 mb-4">Edit Task</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <TaskForm initialValues={task} onSubmit={handleSubmit} isEditMode={true} />
    </div>
  );
}
