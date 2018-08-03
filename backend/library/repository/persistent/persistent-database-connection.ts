import { Car } from './../../entities/car-entity';
import { PersistentDatabaseConfig } from './persistent-database-config';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';

export class PersistentDatabaseConnection {
    connection: Promise<Connection>;

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
            synchronize: true,
            logging: false
        };

        this.connection = createConnection(connOptions);        
    }
}