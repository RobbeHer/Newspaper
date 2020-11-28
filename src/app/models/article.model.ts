import { Tag } from './tag.model';
import { User } from './user.model';
import { ArticleStatus } from './article-status.model';

export class Article {
    public articleID: number;
    public title: string;
    public subTitle: string;
    public shortSummary: string;
    public body: string;
    public tagID: number;
    public tag: Tag;
    public userID: number;
    public user: User;
    public articleStatusID: number;
    public articleStatus: ArticleStatus;

    constructor(){}
}
