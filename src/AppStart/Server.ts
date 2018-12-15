import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { HomeController } from "../Controller/HomeController";
import { ClientController } from "../Controller/ClientController";

/**
 * The server.
 *
 * @class Server
 */
export default class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add api
    this.api();
  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    let router: express.Router = express.Router();
    // Register Routes
    HomeController.Create(router);
    ClientController.Create(router);
    
     //use router middleware
    this.app.use(router);
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    //empty for now
  }

}