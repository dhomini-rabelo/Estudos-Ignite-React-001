import { PlusCircle } from 'phosphor-react'
import { Div } from './styles'



export function InputTask() {

    return (
      <Div.container className="flex justify-between items-center">
        <input type="text" name="task" id="task" placeholder="Adicione uma tarefa" 
          className="flex-1 p-4 bg-pGray-500 border-solid border-pGray-700 rounded-lg mr-2 placeholder-pGray-300 text-pGray-100" 
        />
        <button className="bg-pBlue-800 hover:bg-pBlue-400 p-4 text-pGray-100 text-sm rounded-lg"><span className="mr-2">Criar</span> <PlusCircle size={16} className="inline-block" /></button>
        
      </Div.container>
    )
  }
  
  