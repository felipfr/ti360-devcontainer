import { Injectable, OnModuleInit, Logger } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

// Create a logger instance
const logger = new Logger('PrismaClient')

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect()
      logger.log(`Connected successfully to the database server`)
    } catch (error) {
      logger.error('Error when connecting to the database server', error.message)
      throw new Error()
    }
  }

  async getAllUsers() {
    return this.user.findMany()
  }
}
