import { Router } from "express";

import productRouter from './product.router.js';
import userRouter from './user.router.js';
import cartRouter from './cart.router.js';
import clientRouter from './client.router.js';
import categoryRouter from './category.router.js';
import locationRouter from './location.router.js';
import movementRouter from './movement.router.js';
import storageRouter from './storage.router.js';
import saleRouter from './sale.router.js';


export default class MainRouter {
    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.use('/products', productRouter);
        this.router.use('/users', userRouter);
        this.router.use('/carts', cartRouter);
        this.router.use('/clients', clientRouter);
        this.router.use('/categorys', categoryRouter);
        this.router.use('/locations', locationRouter);
        this.router.use('/movements', movementRouter);
        this.router.use('/storages', storageRouter);
        this.router.use('/sales', saleRouter);
    }

    getRouter() {
        return this.router;
    }
}; 



