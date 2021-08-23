import Task from "./Task"

const Tasks = ({task, onDelete, onDone}) => {
    
    return ( 
    <div>
        {task.map((task)=>(<Task key={task.id} task={task}
        onDelete={onDelete} onDone={onDone}/>))}
    </div> 
    );
}
 
export default Tasks;