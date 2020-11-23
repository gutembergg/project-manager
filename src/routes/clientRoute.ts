import { Router } from 'express'
import ClientController from '@/controllers/ClientController'

const clientRoute = Router()

const clientControlle = new ClientController()

clientRoute.get('/', clientControlle.index)
clientRoute.get('/paginated', clientControlle.paginated)
clientRoute.get('/search', clientControlle.search)
clientRoute.post('/', clientControlle.create)
clientRoute.put('/:id', clientControlle.update)
clientRoute.delete('/:id', clientControlle.delete)

export default clientRoute
