import { GetCarDetailsUseCase } from "../../domain/usecases/car/get-car-details-usecase";
import { Request, Response } from 'express';
import { ListCarsUseCase } from "../../domain/usecases/car/list-cars-usecase";
import { SaveCarDetailsUseCase } from "../../domain/usecases/car/save-car-details-usecase";
import { CarModel } from "../../domain/models/car-model";

export class CarController {

    constructor(private getCarDetailsUseCase: GetCarDetailsUseCase,
                private listCarsUseCase: ListCarsUseCase,
                private saveCarDetailsUseCase: SaveCarDetailsUseCase) { }

    find(request: Request, response: Response): void {
        this.getCarDetailsUseCase.execute(request.params.id)
            .subscribe((result: CarModel) => {
                response.send(result);
            });
    }

    findAll(request: Request, response: Response): void {
        this.listCarsUseCase.execute()
            .then((result) => {
                response.send(result);
            });
    }

    insertOrUpdate(request: Request, response: Response): void {
        let car = new CarModel(request.body);

        console.log(car.getId());

        this.saveCarDetailsUseCase.execute(car);
        response.sendStatus(204);
    }
}