import { ThumbsUp, Trash } from 'phosphor-react'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';


export function Comment() {
    return (
        <div className="comment">
            <Avatar src="https://images.unsplash.com/profile-1453904936751-28af93873ed7?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" hasBorder={false} />
            <div className="commentBox">
                <div className="commentBoxContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>Leslie Alexander</strong>
                            <time dateTime="2022-05-11 11:11:11" title="Onze de maio de 2022, às 11:11">
                                Publicado há uma hora atrás
                            </time>
                        </div>
                        <button title="Deletar seu comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Michael, parabéns!! 👏👏</p>
                </div>

                <footer className="commentLike">
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}