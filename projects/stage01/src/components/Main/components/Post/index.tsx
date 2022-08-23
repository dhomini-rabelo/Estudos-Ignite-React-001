import { Comment } from '../Comment'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';
import { postContentType, postType } from './types';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Markup } from 'interweave';
import { FormEvent, useRef, useState } from 'react';
import { currentUser, diegoUser, leslieUser } from '../../../../core/users';



export function Post({post}: {post: postType}) {
    let [comments, setComments] = useState<string[]>(['test'])
    let textarea = useRef<null | HTMLTextAreaElement>(null)


    function handleNewComment(e: FormEvent) {
        e.preventDefault()
        let form = e.currentTarget as HTMLFormElement

        if (textarea.current!.value !== '') {
            let newComment = textarea.current!.value.slice()
            setComments(prev => [...prev, newComment])
        }

        form.reset()
    }


    function deleteComment(commentToDelete: string) {
        setComments(prev => prev.filter((comment) => comment !== commentToDelete))
    }
    
    
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} />
                    <div className="avatarInfo">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time dateTime={post.publishedAt.toISOString()} title={format(post.publishedAt, "d 'de' LLLL 'às' H:mm'h'", { locale: ptBR, })}>
                    {formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true })}
                </time>
            </header>

            <div className="post-content">
                {post.content.map(({tag, text}: postContentType, index) => {
                    return <Markup content={`<${tag}>${text}</${tag}>`} key={index} />
                })}
            </div>

            <form className="commentForm" onSubmit={handleNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" ref={textarea} /> 
                <footer className="submitComment"><button type="submit">Publicar</button></footer>
            </form>

            <div className="commentList">
                {comments.map((comment, index) => <Comment comment={comment} author={currentUser} key={index} onDeleteComment={deleteComment} />)}
            </div>
        </article>
    )
}