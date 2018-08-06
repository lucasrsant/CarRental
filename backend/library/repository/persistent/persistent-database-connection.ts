import { Car } from './../../entities/car-entity';
import { PersistentDatabaseConfig } from './persistent-database-config';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { Observable, from } from '../../../../node_modules/rxjs';

export class PersistentDatabaseConnection {
    connection: Promise<Connection>;
    rxConnection: Observable<Connection>;

    constructor(private dbConfig: PersistentDatabaseConfig) {
        let connOptions: ConnectionOptions = {
            type: "mysql",
            host: dbConfig.hostname(),
            port: dbConfig.port(),
            username: dbConfig.username(),
            password: dbConfig.password(),
            database: dbConfig.databaseName(),
            entities: [
                Car
            ],
            synchronize: false,
            logging: true
        };

        this.connection = createConnection(connOptions);
        this.rxConnection = from(this.connection);
    }
}