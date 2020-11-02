import { Router } from 'express'
import userRoute from './userRoute'
import sessionRoute from './sessionRoute'

const routes = Router()
const prefixRoutes = '/api/v1'

routes.get('/', (req, res) => {
  return res.send('Hello world')
})

routes.use(`${prefixRoutes}/user`, userRoute)
routes.use(`${prefixRoutes}/session`, sessionRoute)

export default routes
