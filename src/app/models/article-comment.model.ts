import { Article } from './article.model';
import { User } from './user.model';

export class ArticleComment {
    public commentID: number;
    public message: string;
    public userID: number;
    public user: User;
    public articleID: number;
    public article: Article;

    constructor(){}
}
