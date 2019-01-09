import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as homeController from './controllers/home.controller';

class App{
public express:any;
constructor(){
  this.express = express();
  this.mountRoutes();
}
private mountRoutes():void{
  const router = express.Router();
  router.get('/', homeController.index);
  this.express.use('/',router);
}
}

export default new App().express;
const app = express();


module.exports = app;



