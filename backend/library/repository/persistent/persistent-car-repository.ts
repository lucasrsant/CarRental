import { CarRepository } from "../../../domain/repositories/car-repository";
import { PersistentDatabaseConnection } from "./persistent-database-connection";
import { Car } from "../../entities/car-entity";
import { CarModel } from "../../../domain/models/car-model";

export class PersistentCarRepository implements CarRepository {
    constructor(private dbConnection: PersistentDatabaseConnection) { }

    find(plate: string): Promise<CarModel> {
        return this.dbConnection.connection.then((connection) => {
            return connection
                .getRepository(Car)
                .find({plate})
                .then((result) => result[0] as CarModel);
        })
    }

    findAll(): Promise<Array<CarModel>> {
        return this.dbConnection.connection.then((connection) => {
            return connection
                .getRepository(Car)
                .find()
                .then((result) => result.map((value) => value as CarModel));
        })
    }

    insert(car: CarModel): Promise<CarModel> {
        return new Promise((a, b) => {});
    }

    update(car: CarModel): Promise<void> {
        return new Promise((a, b) => {});
    }

    remove(plate: string): Promise<void> {
        return this.dbConnection.connection
            .then(connection => {
                connection.getRepository(Car).delete({plate})
            });
    }
}