/* import productos from './productos.js';

function routerApi(app){
    app.use('/productos', productos);
}

export default routerApi; */
'use strict';

import eventData from './../data/events/index.js';

const getEvents = async (req, res, next)=>{
    try{
        const events = await eventData.getEvents();
        res.send(events);

    }catch(error){
        res.status(400).send(error.message);
    }
}
export default getEvents