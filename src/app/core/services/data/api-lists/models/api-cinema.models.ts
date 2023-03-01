import { IApiMovie } from './api-movie.models';

export interface IApiCinema {
    _id: string;
    name: string;
    location: string;
    movies?: IApiMovie[];
    website?: string;
    contact?: {
        email?: string;
        address?: string;
        phone?: number;
    };
    createdAt?: string;
    updatedAt?: string;
};