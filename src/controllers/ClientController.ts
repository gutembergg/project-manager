import { Request, Response } from 'express'
import ClientRepository from '@/repositories/ClientRepository'
import CreateClientService from '@/services/CreateClientService'

class ClientController {
  public async index (req: Request, res: Response): Promise<Response> {
    const clientrepository = new ClientRepository()

    const client = clientrepository.findAll()
    return res.json(client)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { name, email, telephone } = req.body
    const clientrepository = new ClientRepository()
    const clientService = new CreateClientService(clientrepository)

    const client = await clientService.execute({
      name,
      email,
      telephone
    })
    return res.json(client)
  }
}

export default ClientController
