import { Header } from "./components/Header"
import { SideBar } from './components/SideBar/index';
import { Main } from './components/Main/index';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

export default App
