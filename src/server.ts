import app from './app'
import './database'
import './config/env'
import { Request, Response, NextFunction } from 'express'
import AppErros from './errors/AppErros'

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErros) {
    return res.status(err.statusCode).json({ status: 'error', message: err.message })
  }
  return res.status(500).json({ status: 'error', message: 'Internal server error' })
})

app.listen(3333, () => console.log('Connect server'))
