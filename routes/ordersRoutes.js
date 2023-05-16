import Express from 'express';
import EventController from './../controllers/ordenesjs';
const router = Express.Router();

const {getEvents}= EventController;
router.get('/ordenes', getEvents);
router.get('/ordenes/:ID_Orden', getEvents);
export default {routes: router};