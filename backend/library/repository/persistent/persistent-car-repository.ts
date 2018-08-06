    import { CarRepository } from "../../../domain/repositories/car-repository";
    import { PersistentDatabaseConnection } from "./persistent-database-connection";
    import { Car } from "../../entities/car-entity";
    import { CarModel } from "../../../domain/models/car-model";
    import { Observable, from } from "rxjs";
    import * as operators from 'rxjs/operators';

    export class PersistentCarRepository implements CarRepository {
        constructor(private dbConnection: PersistentDatabaseConnection) { }

        find(plate: string): Observable<CarModel> {
            return this.dbConnection.rxConnection.pipe(
                operators
                    .flatMap((connection) => from(connection.getRepository(Car).find({plate}))
                    .pipe(operators.map((result) => result[0] as CarModel)))
            );
        }

        findAll(): Promise<Array<CarModel>> { 
            return this.dbConnection.connection.then((connection) => {
                return connection
                    .getRepository(Car)
                    .find()
                    .then((result) => {
                        return result.map((value) => value as CarModel)
                    });
            })
        }

        insert(car: CarModel): Promise<CarModel> {
            return this.dbConnection.connection.then((connection) => {
                return connection
                    .getRepository(Car)
                    .insert(car as Car)
                    .then((result) => {
                    console.log(result); 
                    return car;
                    });
            });
        }

        update(car: CarModel): Promise<void> {
            return this.dbConnection.connection.then((connection) => {
                return connection
                    .getRepository(Car)
                    .update(car.getId(), car)
                    .then((result) => {
                    console.log(result); 
                    return;
                    });
            });
        }

        remove(plate: string): Promise<void> {
            return this.dbConnection.connection
                .then(connection => {
                    connection.getRepository(Car).delete({plate})
                });
        }
    }