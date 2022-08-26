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
          <Tasks tasks={tasks} />
        </Div.mainContainer>
      </main>
    </div>
  )
}

