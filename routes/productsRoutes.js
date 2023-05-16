import Express from 'express';
import EventController from './../controllers/productos.js';
const router = Express.Router();

const {getEvents}= EventController;
router.get('/productos', getEvents);
router.get('/productos/:nombre', getEvents);
export default {routes: router};