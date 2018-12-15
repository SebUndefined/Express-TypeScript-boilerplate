import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 *
 * @class Controller
 */
export abstract class  Controller  {

  protected title: string;
  private scripts: string[];

  /**
   * Constructor
   *
   * @class Controller
   * @constructor
   */
  constructor() {
    // Defaults values
    this.title = "Controller";
    this.scripts = [];
  }

  /**
   * Add a JS external file to the request.
   *
   * @class Controller
   * @method addScript
   * @param src {string} The src to the external JS file.
   * @return {Controller} Self for chaining
   */
  public addScript(src: string): Controller {
    this.scripts.push(src);
    return this;
  }

  /**
   * Render a page.
   *
   * @class Controller
   * @method render
   * @param req {Request} The request object.
   * @param res {Response} The response object.
   * @param view {String} The view to render.
   * @param options {Object} Additional options to append to the view's local scope.
   * @return void
   */
  public Render(req: Request, res: Response, object?: Object) {
    //add constants
    res.locals.BASE_URL = "/";

    //add scripts
    res.locals.scripts = this.scripts;

    //add title
    res.locals.title = this.title;

    //render view
    res.send(object);
  }

  /**
   * Render a page.
   *
   * @class Controller
   * @method send
   * @param req {Request} The request object.
   * @param res {Response} The response object.
   * @param view {String} The view to render.
   * @param options {Object} Additional options to append to the view's local scope.
   * @return void
   */
  public Send(req: Request, res: Response, object?: Object) {
    //add constants
    res.locals.BASE_URL = "/";

    //add scripts
    res.locals.scripts = this.scripts;

    //add title
    res.locals.title = this.title;

    //render view
    res.send(object);
  }
}