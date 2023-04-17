import productos from ('./productos');

function routerApi(app){
    app.use('/productos', productos);
}

module.exports = routerApi;