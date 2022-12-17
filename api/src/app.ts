import express, { Application } from 'express';
import http, { Server } from 'http';
import cors from 'cors';
import router from './routes';

class App {
  private app: Application;
  public server: Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);

    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(router);
  }
}


export default new App().server
