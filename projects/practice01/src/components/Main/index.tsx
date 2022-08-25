import { Div } from './styles'
import { InputTask } from './components/InputTask';
import { Tasks } from './components/Tasks'



export function Main() {

    return (
      <main>
        <Div.container className="mx-auto">
          <InputTask />
          <Tasks />
        </Div.container>
      </main>
    )
  }
  
  