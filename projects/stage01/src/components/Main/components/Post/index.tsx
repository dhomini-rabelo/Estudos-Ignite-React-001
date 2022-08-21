import { Comment } from '../Comment'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';
import { postContentType, postType } from './types';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Markup } from 'interweave';



export function Post({post}: {post: postType}) {
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
                {post.content.map(({tag, text}: postContentType) => {
                    return text ? <Markup content={`<${tag}>${text}</${tag}>`} /> : <Markup content={`<${tag}>`} />
                })}
            </div>

            <form className="commentForm">
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" /> 
                <footer className="submitComment"><button type="submit">Publicar</button></footer>
            </form>

            <div className="commentList">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}