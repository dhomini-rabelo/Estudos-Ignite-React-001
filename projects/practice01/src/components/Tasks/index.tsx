import { Div } from "./styles";
import { useState } from 'react';
import { Task } from "./components/Task";
import { taskType } from './../../types/tasks';
import MyModal from "./components/EditTaskModal";




export function Tasks({tasks, markTask, deleteTask}: {tasks: taskType[], markTask: (id: string) => void, deleteTask: (id: string) => void}) {
    
    
    return (
        <Div.container className="pt-16">
            <header className="flex justify-between items-center">
                <div>
                    <strong className="text-pBlue-400 mr-2">Tarefas</strong>
                    <span className="text-pGray-200">{tasks.length}</span>
                </div>
                <div>
                    <strong className="text-pPurple-400 mr-2">Concluídas</strong>
                    <span className="text-pGray-200">{tasks.filter(task => task.checked).length}/{tasks.length}</span>
                    <MyModal />
                </div>
            </header>
            <main className="mt-6">
                {tasks.length === 0 ? (
                    <div className="pt-16 px-6 flex flex-col items-center justify-start">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
                         <rect width="56" height="56" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use href="#image0_43_191" transform="scale(0.01)"/>
                         </pattern><image id="image0_43_191" width="100" height="100" href="data:image/png;base64,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"/></defs>
                        </svg>
                        <span className="text-pGray-300 font-bold">Você ainda não tem tarefas cadastradas</span>
                        <span className="text-pGray-300">Crie tarefas e organize seus itens a fazer</span>
                    </div>
                ): (
                    tasks.map((task) => <Task task={task} key={task.id} markTask={markTask} deleteTask={deleteTask} />)
                )}
            </main>
        </Div.container>
    )
}