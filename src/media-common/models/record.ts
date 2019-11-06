import { Model } from './model';

export interface Record extends Model {
    id: number;
    album: string;
    author: string;
    comments: string;
    authorsId: number;
}