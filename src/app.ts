import express from 'express'

import '@/controllers/UserController'

class App {
    public express: express.Application

    constructor () {
      this.express = express()

      this.middlewares()
    }

    private middlewares () {
      this.express.use(express.json())
    }

    private routes () {

    }
}

export default new App().express
