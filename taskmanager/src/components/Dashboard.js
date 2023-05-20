import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate()

 useEffect(()=>{
    if(!localStorage.getItem("token")) navigate("/")
 })

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const task = {
        task: newTask,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='container' style={{flexDirection:"column" ,justifyContent:"flex-start"}}>
        <h1>Task Dashboard</h1>
      <form className="form" onSubmit={handleCreateTask}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        </div>
        <button className="submit">Create Task</button>
        
      </form>
      <div className="cards">
        {tasks.map((task,i)=>{
          const colors = ["red", "green", "blue"];
          const color = colors[i % colors.length];
      
          return (
            <div key={i} className={`card ${color}`}>
    
          <p className="tip">{task.task}</p>
      </div>)
        })}
    
   
</div>
    </div>
  );
};

export default TaskDashboard;
