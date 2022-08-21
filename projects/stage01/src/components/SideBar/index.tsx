import { PencilLine } from 'phosphor-react'
import './style.css'
import { Avatar } from './../utils/Avatar/index';


export function SideBar() {
    return (
        <aside>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="user-profile-background-image" />
            <div className="profile-y">
                <Avatar hasBorder src="https://images.unsplash.com/profile-1546504431541-6cc83b84050d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                <strong>Michael Baccin</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#"><PencilLine size={20} />Editar seu perfil</a>
            </footer>
        </aside>
    )
}