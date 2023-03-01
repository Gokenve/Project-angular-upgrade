app.get('*', (req, res) => {

    //? Proyect's routes alowed
    const url = ['/index.html', '/', '/home', '/list-movies', '/list-movies/','/list-cinemas','/list-cinemas/','/list-movies/:id', '/list-cinemas/:id', '/user', '/user/:login', '/user/:register', '/edit-movie']
    if (! (url.includes(req.path.toString().loLowerCase()))) {
        res.status(404)
    }
    res.render('index', {req, res});
})