import {UseCase} from '../usecase';
import { CarRepository } from '../../repositories/car-repository';
import { CarModel } from '../../models/car-model';

export class GetCarDetailsUseCase implements UseCase<string, Promise<CarModel>> {

    constructor(private carRepository: CarRepository) { }

    execute(carPlate: string): Promise<CarModel> {
        return this.carRepository.find(carPlate);
    }
}