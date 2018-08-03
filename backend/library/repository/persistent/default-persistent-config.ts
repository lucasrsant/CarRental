import { PersistentDatabaseConfig } from "./persistent-database-config";

export class DefaultPersistentDatabaseConfig implements PersistentDatabaseConfig {
    hostname(): string {
        return "localhost";
    }

    username(): string {
        return "root";
    }

    password(): string {
        return "";
    }

    databaseName(): string {
        return "carRental";
    }

    port(): number {
        return 3306;
    }
}