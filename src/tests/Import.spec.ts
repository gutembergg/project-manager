import UserController from '@/controllers/UserController'
describe('Users', () => {
  it('Should import UserController', () => {
    const user = new UserController()

    user.name = 'Guto'

    expect(user.name).toBe('Guto')
  })
})
