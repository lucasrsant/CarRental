import { Model } from './model';

export class CarModel implements Model<string> {
    model: string = "";
    manufacturer: string = "";
    plate: string = "";
    color: string = "";

    constructor(json: any) {
        this.model = json.model;
        this.manufacturer = json.manufacturer;
        this.plate = json.plate;
        this.color = json.color;
    }

    getId(): string {
        return this.plate;
    }
}