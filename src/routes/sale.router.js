import { Router } from 'express';
import SaleController from '../controllers/sale.controller.js';
const controller = new SaleController();

const router = Router();

router 
      .get('/', controller.getAll)
      .get('/:id', controller.getById)
      .post('/', controller.create)
      .put('/:id', controller.update)
      .delete('/:id', controller.delete)  

export default router;