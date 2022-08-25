import { useState } from 'react'
import { Main } from '../components/Main/index';
import logo from '../assets/images/logo.svg'
import { Div } from './styles';


export function App() {

  return (
    <div className="container mx-auto">
      <header>
        <Div.imageContainer>
            <img src={logo} alt="project-logo" className="mx-auto" />
        </Div.imageContainer>
      </header>
      <Main />
    </div>
  )
}

