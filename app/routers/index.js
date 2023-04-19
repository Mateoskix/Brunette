import productos from './productos.js';

function routerApi(app){
    app.use('/productos', productos);
}

export default routerApi;