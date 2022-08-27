import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { Div } from './styles';
import { InputTask } from '../components/InputTask';
import { Tasks } from '../components/Tasks';
import { taskType } from '../types/tasks';
import { v4 as uuidv4 } from 'uuid';




export function App() {
  let [tasks, setTasks] = useState<taskType[]>([])

  function addTask(text: string) {
    setTasks(prev => [...prev, {id: uuidv4(), text, checked: false}])
  }

  function markTask(id: string) {
    setTasks((prev) => {
      let newTaskList = prev.slice()
      let taskIndex = prev.findIndex(task => task.id === id)
      newTaskList[taskIndex] = {...newTaskList[taskIndex], checked: !newTaskList[taskIndex].checked}
      return newTaskList
    })
  }
  
  function editTaskText(id: string, text: string) {
    setTasks((prev) => {
      let newTaskList = prev.slice()
      let taskIndex = prev.findIndex(task => task.id === id)
      newTaskList[taskIndex] = {...newTaskList[taskIndex], text}
      return newTaskList
    })
  }
  
  function deleteTask(id: string) {
    setTasks((prev) => prev.filter(task => task.id !== id))
  }

  return (
    <div className="container mx-auto">
      <header>
        <Div.imageContainer>
            <img src={logo} alt="project-logo" className="mx-auto" />
        </Div.imageContainer>
      </header>
      <main>
        <Div.mainContainer className="mx-auto">
          <InputTask addTask={addTask} />
          <Tasks tasks={tasks} markTask={markTask} deleteTask={deleteTask} editTaskText={editTaskText} />
        </Div.mainContainer>
      </main>
    </div>
  )
}

