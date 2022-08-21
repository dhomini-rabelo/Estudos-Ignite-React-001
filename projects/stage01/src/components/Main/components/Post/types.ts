export interface postContentType {
    tag: string,
    text?: string,
}


export interface postType {
    id: number,
    author: {
        avatarUrl: string,
        name: string,
        role: string,
    },
    content: postContentType[],
    publishedAt: Date,
}