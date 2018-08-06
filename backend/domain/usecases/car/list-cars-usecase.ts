import { UseCase } from '../usecase';
import { CarModel } from '../../models/car-model';
import { CarRepository } from '../../repositories/car-repository';

export class ListCarsUseCase implements UseCase<void, Promise<Array<CarModel>>> {

    constructor(private carRepository: CarRepository) { }

    execute(): Promise<Array<CarModel>> {
        return this.carRepository.findAll();
    }
}