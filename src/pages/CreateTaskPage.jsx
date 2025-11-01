import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';

export default function CreateTaskPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (taskData) => {
     setLoading(true);
    setError(null);
    try {
      await dispatch(addTask(taskData));
      navigate('/tasks');
    } catch (err) {
      setError('Failed to create task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 my-4">
      <h1 className="h3 mb-4">Create New Task</h1>
      <TaskForm initialValues={{}} onSubmit={handleSubmit} isEditMode={false} />
      {loading && <p>Loading...</p>}
    </div>
  );
}
