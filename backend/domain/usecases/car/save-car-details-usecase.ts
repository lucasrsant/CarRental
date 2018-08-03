import { UseCase } from '../usecase';
import { CarModel } from '../../models/car-model';
import { CarRepository } from '../../repositories/car-repository';

export class SaveCarDetailsUseCase implements UseCase<CarModel, void> {

    constructor(private carRepository: CarRepository) { }

    execute(car: CarModel): void {
        const currentCar = this.carRepository.find(car.getId());
        if(currentCar)
            this.carRepository.update(car);
        else 
            this.carRepository.insert(car);        
    }
}