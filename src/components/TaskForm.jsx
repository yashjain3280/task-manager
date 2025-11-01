import React, { useState, useEffect } from 'react';

export default function TaskForm({ initialValues, onSubmit, isEditMode }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [dueDate, setDueDate] = useState(initialValues.dueDate || '');
  const [status, setStatus] = useState(initialValues.status || 'Pending');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle(initialValues.title || '');
    setDescription(initialValues.description || '');
    setDueDate(initialValues.dueDate || '');
    setStatus(initialValues.status || 'Pending');
  }, [initialValues]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!description.trim()) newErrors.description = 'Description is required.';
    if (!dueDate) newErrors.dueDate = 'Due Date is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit({ title, description, dueDate, status });
  };

  return (
   <form onSubmit={handleSubmit} className="container p-4 border rounded shadow">
  <div className="mb-3">
    <label className="form-label">
      Title <span className="text-danger">*</span>
    </label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
    />
    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
  </div>

  <div className="mb-3">
    <label className="form-label">
      Description <span className="text-danger">*</span>
    </label>
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
      rows={4}
    />
    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
  </div>

  <div className="mb-3">
    <label className="form-label">
      Due Date <span className="text-danger">*</span>
    </label>
    <input
      type="date"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      className={`form-control ${errors.dueDate ? 'is-invalid' : ''}`}
    />
    {errors.dueDate && <div className="invalid-feedback">{errors.dueDate}</div>}
  </div>

  <div className="mb-3">
    <label className="form-label">Status</label>
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="form-select"
    >
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>
  </div>

  <button type="submit" className="btn btn-success">
    {isEditMode ? 'Update Task' : 'Create Task'}
  </button>
</form>
  );
}
