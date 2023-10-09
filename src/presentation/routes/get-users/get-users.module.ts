import { GetUsersController } from './get-users.controller'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/db/prisma/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [GetUsersController],
  providers: [PrismaService]
})
export class GetUsersModule {}
