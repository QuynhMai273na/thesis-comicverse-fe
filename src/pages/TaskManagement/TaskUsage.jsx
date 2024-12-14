import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';

const ParentComponent = () => {
  const [taskToEdit, setTaskToEdit] = useState({
    title: 'Sample Task',
    description: 'This is a sample task description.',
    assignee: 'John Doe',
    dueDate: '2024-12-31',
    priority: 'Medium',
  });

  const handleSave = (updatedTaskData) => {
    console.log('Updated Task:', updatedTaskData);
    // Add logic to save/update the task data, e.g., API call
  };

  return (
    <div>
      <EditTaskForm task={taskToEdit} onSave={handleSave} />
    </div>
  );
};

export default ParentComponent;
