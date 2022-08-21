import { avatarType } from "../../../utils/Avatar/types";

export interface postContentType {
    tag: string,
    text: string,
}


export interface postType {
    id: number,
    author: avatarType,        
    content: postContentType[],
    publishedAt: Date,
}