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

export class AppInjector {
    static providesCarRouter(): Router {
        let router = new CarRouter(AppInjector.providesCarController());
        console.log(router);
        return router.router;
    }

    private static providesCarController(): CarController {
        return new CarController(AppInjector.providesGetCarDetailsUseCase(),
                                AppInjector.providesListCarsUseCase());
    }

    private static providesListCarsUseCase() {
        return new ListCarsUseCase(AppInjector.providesCarRepository());
    }

    private static providesGetCarDetailsUseCase(): GetCarDetailsUseCase {
        return new GetCarDetailsUseCase(AppInjector.providesCarRepository());
    }

    private static providesCarRepository(): CarRepository {
        return new PersistentCarRepository(AppInjector.providesPersistentDatabaseConnection());
    }

    private static providesPersistentDatabaseConnection(): PersistentDatabaseConnection {
        return new PersistentDatabaseConnection(AppInjector.providesDefaultPersistentDatabaseConfig());
    }

    private static providesDefaultPersistentDatabaseConfig(): PersistentDatabaseConfig {
        return new DefaultPersistentDatabaseConfig();
    }
}