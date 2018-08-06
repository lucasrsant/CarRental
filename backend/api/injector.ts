import { Router } from 'express';
import { CarRouter } from "./routers/car-router";
import { CarController } from "./controllers/car-controller";
import { GetCarDetailsUseCase } from "../domain/usecases/car/get-car-details-usecase";
import { CarRepository } from "../domain/repositories/car-repository";
import { PersistentCarRepository } from "../library/repository/persistent/persistent-car-repository";
import { PersistentDatabaseConnection } from "../library/repository/persistent/persistent-database-connection";
import { DefaultPersistentDatabaseConfig } from "../library/repository/persistent/default-persistent-config";
import { PersistentDatabaseConfig } from "../library/repository/persistent/persistent-database-config";
import { ListCarsUseCase } from '../domain/usecases/car/list-cars-usecase';
import { SaveCarDetailsUseCase } from '../domain/usecases/car/save-car-details-usecase';

export class AppInjector {
    providesCarRouter(): Router {
        return new CarRouter(this.providesCarController()).router;
    }

    private providesCarController(): CarController {
        return new CarController(this.providesGetCarDetailsUseCase(),
                                this.providesListCarsUseCase(),
                                this.providesSaveCarDetailsUseCase());
    }

    private providesListCarsUseCase() {
        return new ListCarsUseCase(this.providesCarRepository());
    }

    private providesGetCarDetailsUseCase(): GetCarDetailsUseCase {
        return new GetCarDetailsUseCase(this.providesCarRepository());
    }

    private providesSaveCarDetailsUseCase(): SaveCarDetailsUseCase {
        return new SaveCarDetailsUseCase(this.providesCarRepository());
    }

    private providesCarRepository(): CarRepository {
        return new PersistentCarRepository(this.providesPersistentDatabaseConnection());
    }

    private providesPersistentDatabaseConnection(): PersistentDatabaseConnection {
        return new PersistentDatabaseConnection(this.providesDefaultPersistentDatabaseConfig());
    }

    private providesDefaultPersistentDatabaseConfig(): PersistentDatabaseConfig {
        return new DefaultPersistentDatabaseConfig();
    }
}