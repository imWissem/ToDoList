import { useState } from 'react'
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [task, setTask]= useState(
    [
        {
            id: 1,
            text: 'i should eat',
            time: '10:00',
            done: true ,
        },
        {
            id: 2,
            text: 'i should code',
            time: '12:00',
            done: true ,
        },
        {
            id: 3,
            text: 'i should sleep',
            time: '22:00',
            done: false ,
        }
    
    ]
)

//delete func
const deleteTask = (id) => {
  console.log('delete',id)
  setTask(task.filter((task)=>task.id !== id))
}

//done func 
const clickDone = (id) => {
  console.log(id)
  setTask(
    task.map((task) => task.id === id ? {...task, done: !task.done}: task) 
  ) 
}

//add func 
const addTask = (tasks) => {
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(id)
  const newTask = { id, ...tasks} 
  setTask([...task, newTask])
}


  return (
    <div className="App">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {task.length >0 ? <Tasks task={task} onDelete={deleteTask} onDone={clickDone}/> : '(no plans !!)'}
    </div>
    );
}
 
export default App;