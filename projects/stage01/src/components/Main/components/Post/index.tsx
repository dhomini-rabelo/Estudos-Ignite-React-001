import { Comment } from '../Comment'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';
import { postContentType, postType } from './types';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Markup } from 'interweave';
import { FormEvent, useState } from 'react';



export function Post({post}: {post: postType}) {
    let [comments, setComments] = useState<string[]>(['test'])


    function handleNewComment(e: FormEvent) {
        e.preventDefault()
        setComments(prev => [...prev, 'new comment'])
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
                <textarea placeholder="Deixe um comentário" /> 
                <footer className="submitComment"><button type="submit">Publicar</button></footer>
            </form>

            <div className="commentList">
                {comments.map((comment, index) => <Comment key={index} />)}
            </div>
        </article>
    )
}