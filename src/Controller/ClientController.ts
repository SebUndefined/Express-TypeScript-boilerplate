import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "./Controller";
import { Client } from "../Model/Client";

export class ClientController extends Controller {

    /**
   * Constructor
   *
   * @class ClientController
   * @constructor
   */
    constructor() {
        super();
    }



    public static Create(router: Router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");

        //add home page route
        router.get("/client", (req: Request, res: Response, next: NextFunction) => {
            new ClientController().Index(req, res, next);
        });
        router.get("/client/:clientID", (req: Request, res: Response, next: NextFunction) => {
            new ClientController().Detail(req, res, next);
        });
    }

    /**
   * The home page route.
   *
   * @class ClientController
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
    public Index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "TypeScript Boilerplate | Clients";

        //set options 
        let listClient: Array<Client> = [
            new Client(1, "TACHIER", "Sébastien", new Date(1988, 10, 22)),
            new Client(2, "TACHIER", "Lucie", new Date(1996, 11, 22)),
            new Client(3, "TACHIER", "Yann", new Date(1987, 4, 13)),
        ]

        //render template
        this.Send(req, res, listClient)
    }

    public Detail(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "TypeScript Boilerplate | Clients";

        //set options 
        let listClient: Array<Client> = [
            new Client(1, "TACHIER", "Sébastien", new Date(1988, 10, 22)),
            new Client(2, "TACHIER", "Lucie", new Date(1996, 11, 22)),
            new Client(3, "TACHIER", "Yann", new Date(1987, 4, 13)),
        ]
        let client : Client = listClient.find(client => client.ClientID == Number(req.params.clientID));
        if(client == null) {
            res.status(404).send("Sorry can't find that!")
        }
        //render template
        this.Send(req, res, client)
    }

}