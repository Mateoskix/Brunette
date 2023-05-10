import Express from 'express';
import EventController from './../controllers/productos.js';
const router = Express.Router();

const {getEvents}= EventController;
router.get('/Productos', getEvents);
export default {routes: router};