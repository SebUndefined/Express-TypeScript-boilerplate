import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "./Controller";

export class HomeController extends Controller {

    /**
   * Constructor
   *
   * @class HomeController
   * @constructor
   */
    constructor() {
        super();
    }



    public static Create(router: Router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new HomeController().Index(req, res, next);
        });
    }

    /**
   * The home page route.
   *
   * @class HomeController
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
    public Index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "Home | Tour of Heros";

        //set options
        let options: Object = {
            "message": "Welcome to the Tour of Heros"
        };

        //render template
        this.Send(req, res, options);
    }

}