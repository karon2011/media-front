import { Model } from './model';

export interface User extends Model {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    creationDate: Date;
}