import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '@/infra/db/prisma/prisma.service'

@Controller('get-users')
export class GetUsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getAllUsers() {
    return this.prisma.getAllUsers()
  }
}
