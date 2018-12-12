import * as Server from "./AppStart/Server"
import * as Debug from "debug"
import * as Http from 'http'
import * as express from "express";

class InitApp {

    private httpPort: number
    private app: express.Application
    private httpServer:Http.Server

    constructor() {
        this.httpPort = this.normalizePort(process.env.PORT || 8080);
        this.app = Server.default.bootstrap().app
        this.app.set("port", this.httpPort)
        this.httpServer = Http.createServer(this.app)
    }

    public static initialize() {
        let myApp = new InitApp()
        myApp.httpServer.listen(myApp.httpPort);

        myApp.httpServer.on("listening", function(){
            const debug = Debug("kkj");
            debug("pouet")
            let url = myApp.httpServer.address()
            let bind = typeof url === "string"
                ? "pipe " + url
                : "port " + url.port;
            debug("Listening on " + bind);
        });
    }
    /**
     * Normalize port
     * @param val 
     */
    private normalizePort(val) {
        var port = parseInt(val, 10);
      
        if (isNaN(port)) {
          // named pipe
          return val;
        }
      
        if (port >= 0) {
          // port number
          return port;
        }
      
        return false;
      }
      
      
}

InitApp.initialize()