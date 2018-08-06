import * as express from 'express'
import * as bodyParser from 'body-parser';
import { AppInjector } from './injector';

class App {
  public app: express.Express

  constructor () {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    const appInjector = new AppInjector();

    router.use('/car', appInjector.providesCarRouter());
    
    this.app.use(bodyParser.json());
    this.app.use('/', router)
  }
}

export default new App().app