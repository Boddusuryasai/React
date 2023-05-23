import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/');
  }, [navigate]);

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex].task = newTask;
      setTasks(updatedTasks);
      setEditMode(false);
      setEditTaskIndex(null);
      setEditTaskValue('');
    } else {
      const task = {
        task: newTask,
      };
      setTasks([...tasks, task]);
    }
    setNewTask('');
  };

  const handleEditTask = (taskIndex, taskValue) => {
    setEditMode(true);
    setEditTaskIndex(taskIndex);
    setEditTaskValue(taskValue);
    setNewTask(taskValue);
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container' >
      <form className='form' onSubmit={handleCreateTask}>
      <h1>Task Dashboard</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button className='submit' type='submit'>
          {editMode ? 'Update Task' : 'Create Task'}
        </button>
      </form>
      <div className='cards'>
        {tasks.map((task, i) => {
          const colors = ['red', 'green', 'blue'];
          const color = colors[i % colors.length];

          return (
            <div key={i} className={`card ${color}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className='tip'>{task.task}</p>
              <div>
                <AiFillDelete onClick={() => handleDeleteTask(i)} />
                <AiFillEdit onClick={() => handleEditTask(i, task.task)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskDashboard;
