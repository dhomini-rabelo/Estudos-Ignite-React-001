import { CheckCircle, Circle, Trash } from "phosphor-react";
import { EditTaskModal } from "../EditTaskModal";
import { taskType } from './../../../../types/tasks';

export function Task({task, markTask, deleteTask, editTaskText}: {task: taskType, markTask: (id: string) => void, deleteTask: (id: string) => void, editTaskText: (id: string, text: string) => void}) {
    
    function handleMarkTask(id: string) {
        markTask(id)
    }
    
    function handleDeleteTask(id: string) {
        deleteTask(id)
    }


    return (
        <div className="flex justify-between items-start py-4 px-4">
            <span onClick={() => handleMarkTask(task.id)} className="cursor-pointe">{
                task.checked ? 
                    <CheckCircle weight="fill" size={24} className="text-pPurple-800 hover:text-pPurple-400" /> 
                    : <Circle className="text-pBlue-400 hover:text-pBlue-800" size={24} />
            }</span>
            <EditTaskModal id={task.id} text={task.text} editTask={editTaskText} checked={task.checked} />
            <span className="cursor-pointer text-pGray-300 hover:text-pRed-300" onClick={() => handleDeleteTask(task.id)}>
                <Trash size={24} />
            </span>
        </div>
    )
}