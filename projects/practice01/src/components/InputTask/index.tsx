import { PlusCircle } from 'phosphor-react'
import { useRef, KeyboardEvent } from 'react'
import { Div } from './styles'



export function InputTask({ addTask }: { addTask: (text: string) => void }) {
  let input = useRef<null | HTMLInputElement>(null)

  function handleNewTask() {
    let newTaskText = input.current!.value.slice().trim()
    if (newTaskText) {
      addTask(newTaskText)
    }
    input.current!.value = ''
    input.current!.focus()
  }

  function handleNewTaskByKeyboard(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {handleNewTask()}
  }

  return (
    <Div.container className="flex justify-between items-stretch">
      <input type="text" name="task" id="task" placeholder="Adicione uma tarefa" ref={input} onKeyDown={handleNewTaskByKeyboard} required
        className="flex-1 p-4 bg-pGray-500 border-solid border-pGray-700 rounded-lg mr-2 placeholder-pGray-300 text-pGray-100" 
      />
      <button onClick={handleNewTask} className="bg-pBlue-800 hover:bg-pBlue-400 p-4 text-pGray-100 text-sm rounded-lg"><span>Criar</span> <PlusCircle size={16} className="inline-block" /></button>
    </Div.container>
  )
}
  
  