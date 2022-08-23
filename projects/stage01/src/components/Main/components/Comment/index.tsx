import { ThumbsUp, Trash } from 'phosphor-react'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';
import { avatarType } from './../../../utils/Avatar/types';
import { useState } from 'react';



export function Comment({comment, author, onDeleteComment}: {comment: string, author: avatarType, onDeleteComment: (comment: string) => void}) {
    let [likes, setLikes] = useState<number>(1)

    function handleDeleteComment(commentToDelete: string) {
        onDeleteComment(commentToDelete)
    }   

    function handleLikeAddition() {
        setLikes(prev => prev + 1)
    }   
    
    
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
                        <button title="Deletar seu comentário" onClick={() => handleDeleteComment(comment)}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer className="commentLike">
                    <button onClick={handleLikeAddition}>
                        <ThumbsUp />
                        Aplaudir<span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}