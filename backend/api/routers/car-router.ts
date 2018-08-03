import { Router } from 'express';
import { CarController } from '../controllers/car-controller';

export class CarRouter {
    router: Router;
    constructor(private carController: CarController) {
        this.router = Router();
        this.router.get('/', carController.findAll);
        this.router.get('/:id', carController.find);
    }
}