import { Router } from 'express';
import { CarController } from '../controllers/car-controller';

export class CarRouter {
    router: Router;
    constructor(private carController: CarController) {
        this.router = Router();

        this.router.get('/', (request, response) => {
            this.carController.findAll(request, response);
        });

        this.router.get('/:id', (request, response) => {
            this.carController.find(request, response);
        });

        this.router.post('/', (request, response) => {
            this.carController.insertOrUpdate(request, response);
        })
    }
}