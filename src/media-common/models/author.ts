import { Model } from './model';

export interface Author extends Model {
    id: number;
    name: string;
    country: string;
    description: string;
}