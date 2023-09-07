import { Router } from 'express';
import CartController from '../controllers/cart.controller.js';
const controller = new CartController();

const router = Router();

router 
      .get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.create)
      .put('/:id', controller.update)
      .delete('/:id', controller.delete)  

export default router;