import { PersistentDatabaseConfig } from "./persistent-database-config";

export class DefaultPersistentDatabaseConfig implements PersistentDatabaseConfig {
    hostname(): string {
        return "localhost";
    }

    username(): string {
        return "root";
    }

    password(): string {
        return "123456";
    }

    databaseName(): string {
        return "carRental";
    }

    port(): number {
        return 3306;
    }
}