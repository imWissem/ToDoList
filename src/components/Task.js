import {FaTimes,FaCheck} from 'react-icons/fa'
const Task = ({task , onDelete, onDone}) => {
    return (
        <div className={`task ${task.done && 'reminder'}`} onDoubleClick={()=>onDone(task.id)}>
            <h3>{task.text} 
            <h3><FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}/> 
            <FaCheck 
            className={`${task.done && 'fagr'}`}
            onClick={()=>onDone(task.id)}
            /></h3></h3>
        
            <p>{task.time}</p>
        </div>
     );
}
 
export default Task;