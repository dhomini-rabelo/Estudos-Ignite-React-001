import { Comment } from '../Comment'
import './style.css'
import { Avatar } from './../../../utils/Avatar/index';


export function Post() {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src="https://images.unsplash.com/profile-1546504431541-6cc83b84050d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                    <div className="avatarInfo">
                        <strong>Michael Baccin</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="2022-05-11 11:11:11" title="Onze de maio de 2022, às 11:11">
                    Publicado há uma hora
                </time>
            </header>

            <div className="post-content">
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href="">jane.design/doctorcare</a></p>

                    <p><a href="">#novoprojeto</a>{' '}<a href="">#nlw</a>{' '}<a href="">#rocketseat</a></p>
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