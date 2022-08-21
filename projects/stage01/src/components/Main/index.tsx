import { Post } from './components/Post'
import './style.css'
import { posts } from './components/Post/data';


export function Main() {
    return (
        <main>
            {posts.map((post, index) => <Post post={post} key={index} />)}
        </main>
    )
}