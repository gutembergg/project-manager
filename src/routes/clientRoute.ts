import { Router } from 'express'
import ClientController from '@/controllers/ClientController'

const clientRoute = Router()

const clientControlle = new ClientController()

clientRoute.get('/', clientControlle.index)

export default clientRoute
