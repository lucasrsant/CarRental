import {Model} from './model';

export class CarModel implements Model<string> {
    model: string = "";
    manufacturer: string = "";
    plate: string = "";
    color: string = "";

    getId(): string {
        return this.plate;
    }
}