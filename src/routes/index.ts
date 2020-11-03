import { Router } from 'express'
import userRoute from './userRoute'
import sessionRoute from './sessionRoute'
import clientRoute from './clientRoute'

const routes = Router()
const prefixRoutes = '/api/v1'

routes.use(`${prefixRoutes}/user`, userRoute)
routes.use(`${prefixRoutes}/session`, sessionRoute)
routes.use(`${prefixRoutes}/client`, clientRoute)

export default routes
