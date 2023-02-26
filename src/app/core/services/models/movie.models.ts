export interface IMovie {
    _id?: string;
    title: string;
    director: string;
    cast?: string[];
    year: number;
    genre: MovieGenre[];
    picture?: string;
    data_sheet: {
        producers?: string[];
        script?: string[];
        duration?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

export type MovieGenre = 
'Acción' 
| 'Animación' 
| 'Drama' 
| 'Bélica' 
| 'Comedia' 
| 'Comedia romántica' 
| 'Comedia costumbrista' 
| 'Comedia apocalíptica' 
| 'Ciencia ficción' 
| 'Terror' 
| 'Suspense' 
| 'Policiaca' 
| 'Fantasía' 
| 'Romantica' 
| 'Aventuras' 
| 'Musical' 
| 'Infantil';