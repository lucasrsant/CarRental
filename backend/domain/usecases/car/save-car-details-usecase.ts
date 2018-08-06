import { UseCase } from '../usecase';
import { CarModel } from '../../models/car-model';
import { CarRepository } from '../../repositories/car-repository';
import { Observable, from } from 'rxjs';
import * as operators from 'rxjs/operators';

export class SaveCarDetailsUseCase implements UseCase<CarModel, Observable<void>> {

    constructor(private carRepository: CarRepository) { }

    execute(car: CarModel): Observable<void> {
        return this.carRepository.find(car.getId()).pipe(
            operators.flatMap((result) => {
                if(result)
                    return from(this.carRepository.update(car));
                else 
                    return from(this.carRepository.insert(car)).pipe(
                        operators.map(() => {})
                    );
            }));
    }
}