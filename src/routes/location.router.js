import { Router } from 'express';
import LocationController from '../controllers/location.controller.js';
const controller = new LocationController();

const router = Router();

router 
      .get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.create)
      .put('/:id', controller.update)
      .delete('/:id', controller.delete)  

export default router;