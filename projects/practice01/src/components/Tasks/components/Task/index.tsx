import { CheckCircle, Circle, Trash } from "phosphor-react";
import { taskType } from './../../../../types/tasks';

export function Task({task, markTask}: {task: taskType, markTask: (id: string) => void}) {
    
    function handleMarkTask(id: string) {
        markTask(id)
    }


    return (
        <div className="flex justify-between items-start py-4 px-4">
            <span onClick={() => handleMarkTask(task.id)} className="cursor-pointe">{
                task.checked ? 
                    <CheckCircle weight="fill" size={24} className="text-pPurple-800 hover:text-pPurple-400" /> 
                    : <Circle className="text-pBlue-400 hover:text-pBlue-800" size={24} />
            }</span>
            <span className="grow px-3">{task.text}</span>
            <span className="cursor-pointer text-pGray-300 hover:text-pRed-300"><Trash size={24} /></span>
        </div>
    )
}