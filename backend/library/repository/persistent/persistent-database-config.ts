export interface PersistentDatabaseConfig {
    hostname(): string;
    username(): string;
    password(): string;
    databaseName(): string;
    port(): number;
}