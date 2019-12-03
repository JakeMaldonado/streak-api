import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';
 
class App {
  public app: express.Application;
  public port: number;
  private dirEnv: string;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.dirEnv = 'client/build';

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializePublicRoutes()
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializePublicRoutes() {
    this.app.use(express.static(path.join(__dirname, this.dirEnv)));

    this.app.get('*', (req, res) =>{
      res.sendFile(path.join(__dirname + '/' + this.dirEnv + '/index.html'));
    });
  }

  private initializeControllers(controllers) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;
