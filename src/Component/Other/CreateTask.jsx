import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/ContextProider';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const context = useContext(AuthContext);
  const employees = context?.employees || [];
  const [taskData, setTaskData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    employeeId: '',
    category: 'General',
    description: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!taskData.title.trim()) {
      setError('Task title is required');
      return;
    }

    if (!taskData.employeeId) {
      setError('Please select an employee');
      return;
    }

    // Get current data from localStorage
    const { employees: storedEmployees, admin } = getLocalStorage();
    const employeeIndex = storedEmployees.findIndex(
      emp => emp.id === parseInt(taskData.employeeId)
    );

    if (employeeIndex === -1) {
      setError('Selected employee not found');
      return;
    }

    // Create new task object
    const newTask = {
      title: taskData.title.trim(),
      date: taskData.date,
      category: taskData.category,
      description: taskData.description.trim() || 'No description provided',
      active: false,
      new_task: true,
      completed: false,
      failed: false
    };

    // Update employee's tasks and summary
    const updatedEmployees = [...storedEmployees];
    updatedEmployees[employeeIndex] = {
      ...updatedEmployees[employeeIndex],
      tasks: [newTask, ...updatedEmployees[employeeIndex].tasks],
      task_summary: {
        ...updatedEmployees[employeeIndex].task_summary,
        new_task: updatedEmployees[employeeIndex].task_summary.new_task + 1
      }
    };

    // Save to localStorage
    setLocalStorage(updatedEmployees, admin);

    // Reset form
    setTaskData({
      title: '',
      date: new Date().toISOString().split('T')[0],
      employeeId: '',
      category: 'General',
      description: ''
    });

    // Show success message
    alert(`Task created successfully for ${updatedEmployees[employeeIndex].first_name}!`);
  };

  return (
    <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500 text-white rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-2">Task Title*</label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Due Date</label>
            <input
              type="date"
              name="date"
              value={taskData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Assign To*</label>
            <select
              name="employeeId"
              value={taskData.employeeId}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            >
              <option value="">Select Employee</option>
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.first_name} ({employee.email})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Category</label>
            <select
              name="category"
              value={taskData.category}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            >
              <option value="General">General</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Reporting">Reporting</option>
              <option value="Meeting">Meeting</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Task details..."
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;