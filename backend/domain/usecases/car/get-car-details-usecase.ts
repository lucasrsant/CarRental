import { UseCase } from '../usecase';
import { CarRepository } from '../../repositories/car-repository';
import { CarModel } from '../../models/car-model';
import { Observable, from } from 'rxjs';

export class GetCarDetailsUseCase implements UseCase<string, Observable<CarModel>> {

    constructor(private carRepository: CarRepository) { }

    execute(carPlate: string): Observable<CarModel> {
        return this.carRepository.find(carPlate);
    }
}