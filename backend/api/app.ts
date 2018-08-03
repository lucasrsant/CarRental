import * as express from 'express'
import { AppInjector } from './injector';

class App {
  public express: express.Express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.use('/car', AppInjector.providesCarRouter());
    this.express.use('/', router)
  }
}

export default new App().express