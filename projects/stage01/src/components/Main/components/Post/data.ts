import { currentUser, diegoUser, leslieUser } from "../../../../core/users";
import { postType } from "./types";


export let posts: postType[] = [
    {
        id: 1,
        author: leslieUser,
        content: [
            {tag: 'p', text: 'Fala galeraa 👋'},
            {tag: 'p', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {tag: 'a', text: 'jane.design/doctorcare'}
        ],
        publishedAt: new Date('2022-05-03 11:11:11'),
    },
    {
        id: 2,
        author: diegoUser,
        content: [
            {tag: 'p', text: 'Falaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  dev.....'},
            {tag: 'p', text: 'Novo projeto postado no Ignite 🚀'},
        ],
        publishedAt: new Date('2022-05-03 11:11:11'),
    },
]