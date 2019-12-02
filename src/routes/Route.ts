import * as express from 'express'

export class Route {
    routehandler: express.Router
    url: string
    
    constructor(){
        this.routehandler = express.Router()
    }
}