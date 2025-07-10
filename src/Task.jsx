import React, { useState } from 'react';
import './Task.css';

const Tasks = () => {
  const [tasks, setTasks] = useState(['Work-Out']);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
    }
  };

  React.useEffect(() => {
    const handler = (e) => addTask(e.detail);
    window.addEventListener('newTaskAdded', handler);
    return () => window.removeEventListener('newTaskAdded', handler);
  }, [tasks]);

  return (
    <>
      {tasks.map((task, index) => (
        <div
          className="task"
          style={{ top: `${(index + 1) * 10}vw` }}
          key={index}
        >
          <div className="text">{task}</div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
