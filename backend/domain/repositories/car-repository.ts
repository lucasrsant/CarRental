import { CarModel } from '../models/car-model';
import { Repository } from './repository';

export abstract class CarRepository implements Repository<CarModel, string> {
    abstract find(plate: string): Promise<CarModel>;
    abstract findAll(): Promise<Array<CarModel>>;
    abstract insert(car: CarModel): Promise<CarModel>;
    abstract update(car: CarModel): Promise<void>;
    abstract remove(plate: string): Promise<void>;
}