import { GetCarDetailsUseCase } from "../../domain/usecases/car/get-car-details-usecase";
import { Request, Response } from 'express';
import { ListCarsUseCase } from "../../domain/usecases/car/list-cars-usecase";

export class CarController {
    constructor(private getCarDetailsUseCase: GetCarDetailsUseCase,
                private listCarsUseCase: ListCarsUseCase) { }

    find(request: Request, response: Response) {
        this.getCarDetailsUseCase.execute("abcd")
            .then((result) => {
                console.log(result);
            });
    }

    findAll(request: Request, response: Response) {
        
    }
}