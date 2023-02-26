import { INav } from '../../models/nav.models';


export const pagesToSelect: INav[] = [
    {
      toLink: 'home',
      toText: 'Inicio'
    },
    {
      toLink: 'list-movies',
      toText: 'Películas'
    },
    {
      toLink: 'list-cinemas',
      toText: 'Cines'
    },
    {
      toLink: 'user/:register',
      toText: 'Registro'
    },
    {
      toLink: 'user/:login',
      toText: 'Login'
    },
    {
      toLink: 'user',
      toText: 'Usuario'
    }
  ];