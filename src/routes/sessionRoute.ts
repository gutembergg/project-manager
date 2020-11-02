import { Router } from 'express'
import SessionControlle from '../controllers/SessionController'

const sessionRoute = Router()

const sessionControlle = new SessionControlle()

sessionRoute.post('/', sessionControlle.create)

export default sessionRoute
