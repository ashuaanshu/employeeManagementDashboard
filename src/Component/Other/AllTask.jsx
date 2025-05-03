import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  
  // Calculate task counts for each employee
  const employeesWithTaskCounts = authData?.employees?.map(employee => {
    const taskCounts = {
      total: employee.tasks.length,
      new: employee.tasks.filter(task => task.new_task).length,
      active: employee.tasks.filter(task => task.active).length,
      completed: employee.tasks.filter(task => task.completed).length,
      failed: employee.tasks.filter(task => task.failed).length
    };
    return { ...employee, taskCounts };
  }) || [];

  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg mt-5 overflow-auto">
      <h2 className="text-xl font-bold text-white mb-4">All Employees Task Summary</h2>
      
      <div className="grid grid-cols-6 gap-4 bg-yellow-300 text-black font-bold border-b text-lg border-gray-700 pb-2 mb-3">
        <div className="col-span-2">Employee Name</div>
        <div>New Tasks</div>
        <div>Active Tasks</div>
        <div>Completed</div>
        <div>Failed</div>
      </div>

      {employeesWithTaskCounts.length > 0 ? (
        employeesWithTaskCounts.map(employee => (
          <div 
            key={employee.id} 
            className="grid grid-cols-6 gap-4 text-white py-3 border-b border-gray-700 hover:bg-gray-800 transition-colors"
          >
            <div className="col-span-2 font-medium">
              {employee.first_name}
            </div>
            <div className={employee.taskCounts.new > 0 ? 'text-blue-400' : ''}>
              {employee.taskCounts.new}
            </div>
            <div className={employee.taskCounts.active > 0 ? 'text-yellow-400' : ''}>
              {employee.taskCounts.active}
            </div>
            <div className={employee.taskCounts.completed > 0 ? 'text-green-400' : ''}>
              {employee.taskCounts.completed}
            </div>
            <div className={employee.taskCounts.failed > 0 ? 'text-red-400' : ''}>
              {employee.taskCounts.failed}
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-400 text-center py-4">No employees found</div>
      )}

      {/* Total Summary Row */}
      {employeesWithTaskCounts.length > 0 && (
        <div className="grid grid-cols-6 gap-4 text-white font-bold pt-3 mt-2 border-t border-gray-600">
          <div className="col-span-2">Total</div>
          <div className="text-blue-400">
            {employeesWithTaskCounts.reduce((sum, emp) => sum + emp.taskCounts.new, 0)}
          </div>
          <div className="text-yellow-400">
            {employeesWithTaskCounts.reduce((sum, emp) => sum + emp.taskCounts.active, 0)}
          </div>
          <div className="text-green-400">
            {employeesWithTaskCounts.reduce((sum, emp) => sum + emp.taskCounts.completed, 0)}
          </div>
          <div className="text-red-400">
            {employeesWithTaskCounts.reduce((sum, emp) => sum + emp.taskCounts.failed, 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTask;