import { IMovie } from './movie.models';

export interface ICinema {
    _id: string;
    name: string;
    location: string;
    movies?: IMovie[];
    website?: string;
    contact?: {
        email?: string;
        address?: string;
        phone?: number;
    };
    createdAt?: string;
    updatedAt?: string;
};