import { useState } from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main/index';


export function App() {

  return (
    <div className="container mx-auto">
      <Header />
      <Main />
    </div>
  )
}

