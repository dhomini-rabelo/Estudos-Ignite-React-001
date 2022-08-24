import logo from '../../assets/images/logo.svg'
import { Div } from './styles'



export function Header() {

    return (
      <header>
        
            <Div.imageContainer>
                <img src={logo} alt="project-logo" className="mx-auto" />
            </Div.imageContainer>
        
      </header>
    )
  }
  
  