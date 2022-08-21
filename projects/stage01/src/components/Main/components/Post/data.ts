import { postType } from "./types";


export let posts: postType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://images.unsplash.com/profile-1546504431541-6cc83b84050d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            name: 'Michael Baccin',
            role: 'Web Developer',
        },
        content: [
            {tag: 'p', text: 'Fala galeraa 👋'},
            {tag: 'p', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {tag: 'a', text: 'jane.design/doctorcare'}
        ],
        publishedAt: new Date('2022-05-03 11:11:11'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CEO @Rocketseat',
        },
        content: [
            {tag: 'p', text: 'Falaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  dev.....'},
            {tag: 'p', text: 'Novo projeto postado no Ignite 🚀'},
        ],
        publishedAt: new Date('2022-05-03 11:11:11'),
    },
]