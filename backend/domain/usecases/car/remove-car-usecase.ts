import { UseCase } from '../usecase';
import { CarRepository } from '../../repositories/car-repository';

export class RemoveCarUseCase implements UseCase<string, void> {

    constructor(private carRepository: CarRepository) { }

    execute(carPlate: string): void {
        this.carRepository.remove(carPlate);
    }
}