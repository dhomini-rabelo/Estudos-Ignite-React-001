import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { Div } from './styles';
import { InputTask } from '../components/InputTask';
import { Tasks } from '../components/Tasks';


export function App() {

  return (
    <div className="container mx-auto">
      <header>
        <Div.imageContainer>
            <img src={logo} alt="project-logo" className="mx-auto" />
        </Div.imageContainer>
      </header>
      <main>
        <Div.mainContainer className="mx-auto">
          <InputTask />
          <Tasks />
        </Div.mainContainer>
      </main>
    </div>
  )
}

