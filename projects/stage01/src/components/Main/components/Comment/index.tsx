import { ThumbsUp, Trash } from 'phosphor-react'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';
import { avatarType } from './../../../utils/Avatar/types';



export function Comment({comment, author}: {comment: string, author: avatarType}) {
    return (
        <div className="comment">
            <Avatar src={author.avatarUrl} hasBorder={false} />
            <div className="commentBox">
                <div className="commentBoxContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>{author.name}</strong>
                            <time dateTime="2022-05-11 11:11:11" title="Onze de maio de 2022, às 11:11">
                                Publicado há uma hora atrás
                            </time>
                        </div>
                        <button title="Deletar seu comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{comment}</p>
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