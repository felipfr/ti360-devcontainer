import { Test, TestingModule } from '@nestjs/testing'
import { GetUsersController } from './get-users.controller'
import { PrismaService } from '@/infra/db/prisma/prisma.service'

describe('GetUsersController', () => {
  let controller: GetUsersController
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUsersController],
      providers: [PrismaService]
    }).compile()

    controller = module.get<GetUsersController>(GetUsersController)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return an array of users', async () => {
    // Simule o comportamento do método getAllUsers do PrismaService
    const users = [
      { id: 1, name: 'User 1', email: 'user1@example.com', password: 'password1' },
      { id: 2, name: 'User 2', email: 'user2@example.com', password: 'password2' }
    ]
    jest.spyOn(prismaService, 'getAllUsers').mockResolvedValue(users)

    // Chame o método getAllUsers do controlador
    const result = await controller.getAllUsers()

    // Verifique se o resultado é igual ao array de usuários simulado
    expect(result).toEqual(users)
  })
})
