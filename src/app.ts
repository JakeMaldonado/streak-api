import express from 'express';
import path from 'path';
import * as bodyParser from 'body-parser';
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public port: number;
  private dirEnv: string;
  private uri: string = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/local";

  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.dirEnv = 'client/build';

    this.intializeMongoDB();

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

  private intializeMongoDB() {
    mongoose.connect(this.uri, (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Successfully Connected Mongo!");
      }
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
