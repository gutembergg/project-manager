import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import routes from './routes'

class App {
    public express: express.Application

    constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
    }

    private middlewares () {
      this.express.use(express.json())
    }

    private routes () {
      this.express.use(routes)
    }
}

export default new App().express
