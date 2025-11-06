import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../redux/tasksSlice';
import TaskTable from '../components/TaskTable';
import { useNavigate } from 'react-router-dom';
import { FaThList, FaThLarge } from 'react-icons/fa';
import TaskCardView from '../components/TaskCardView';


export default function TaskListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.list);

  const [filter, setFilter] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [viewMode,setViewMode] = useState('list');


  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    // console.log('tasks:', tasks);
    // console.log('filter:', filter);

    if (filter === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((t) => t.status === filter));
    }
  }, [filter, tasks]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(filteredTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredTasks(items);
  };

  return (
    <div className="container p-4 my-4">
      <h1 className="h2 mb-4">Tasks</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-select w-auto"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            className="btn btn-outline-secondary"
            onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
          >
            {viewMode === 'list' ? (
              <>
                <FaThLarge className="me-1" /> Card View
              </>
            ) : (
              <>
                <FaThList className="me-1" /> List View
              </>
            )}
          </button>
        </div>

        <button onClick={() => navigate('/tasks/new')} className="btn btn-primary">
          Create Task
        </button>
      </div>

      {viewMode === 'list' ? (
        <TaskTable
          tasks={filteredTasks}
          onDelete={handleDelete}
          onDragEnd={handleDragEnd}
        />
      ) : (
        <TaskCardView
          tasks={filteredTasks}
          onDelete={handleDelete}
          onDragEnd={handleDragEnd}
        />
      )}
    </div>
  );
}