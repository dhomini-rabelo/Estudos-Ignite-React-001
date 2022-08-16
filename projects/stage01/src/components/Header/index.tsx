import './Header.css'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <header>
            <img src={logo} alt="ignite-logo" />
            <h1><strong>Ignite Feed</strong></h1>
        </header>
    )
}