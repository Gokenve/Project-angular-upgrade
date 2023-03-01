-------------------------------------------------------------- *PROIYECTO ANGULAR* --------------------------------------------------------------

**HECHO**

*VISTAS (Views):

  1. home --> FALTA darle contenido (Texto y fotos principalmente... Darle una vuelta).

  2. listado de películas --> Filtrar por título, por género (mediante un 'select'), por director y por actor.

  3. listado de cines --> Filtrar por nombre, por localidad (mediante un 'select'?).

  4. detalle película --> Pintado al hacer click en película de listado de películas.

  5. detalle cine --> Pintado la hacer click en cine de listado de cines. FALTA evento al pinchar en películas de cines y enviar a detalle película

  6. user --> Página donde tener acceso a la edición (creación/actualización) de películas. FALTAN los listados de películas creadas y actualizadas.

  7. error404 --> Existe un error con el componente botón. No reconoce el componente aunque el módulo Shared.module está importado en el módulo de error404 y el componente exportado en Shared.module.

*COMPONENTES:

  1. movie --> Componente hijo de listMovies. En el se realiza el bucle para pintar todas las películas.
    PROBLEMAS con los @Outputs y pipe para filtrar películas.

  2. cinema --> Componente hijo de listCinemas. En el se realiza el bucle para pintar todos los cines.
    PROBLEMAS con los @Outputs y pipe para filtrar películas.

	En la carpeta core:

  1. header --> Con h1 del nombre de la web y el nav.

  2. nav-header --> Componente hijo de header. Bucle para crear los links a home, peliculas, cines, registro/login y user.

  3. nav-header-link --> Componente hijo de nav-header con componente de enlace (<a>)

  4. footer --> Sin contenido

	En la carpeta shared:

  1. button --> Componente reutilizable (en principio en formularios y página user)
    FALTA incorporarlos en paginas de detalles para el submit de las búsquedas (2), en los submits de los formularios de registro/login (1) y para eliminar usuario (1).

  2. movies-form --> Formulario para creación y actualización de películas en la ruta 'edit-movie'. Se accede desde botón en la página user.

  3. cinemas-form --> Formulario para creación y actualización de cines. Sin contenido por falta de tiempo. Preferí dedicarle tiempo a otros requisitos porque ya se cumplian con la lista de películas.

**POR HACER**

- Poblar la base de datos con películas y cines. Y modificar código Nodejs para cookie de usuario.

- Llamada a la API.

- Enrutamiento para los usuarios registrados y logueados (está autorizado).

- Crear un array donde introducir péliculas creadas y actualizadas para poder mostrarlas en la página user.

- formulario para registro/login --> Sin tiempo para realizarlo.

- Componentes:

EN CASO DE QUE DÉ TIEMPO...

- formulario para crear/actulizar películas.
- formulario para crear/actulizar cines.

