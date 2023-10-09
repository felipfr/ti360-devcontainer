import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  // Create a logger instance
  const logger = new Logger('Bootstrap')

  // Create an instance of the configuration service to access environment variables
  const envService = new ConfigService()

  // Configure the Fastify adapter
  const fastifyAdapter = new FastifyAdapter({
    ignoreTrailingSlash: true,
    requestIdHeader: 'x-request-id'
  })

  // Create a NestJS application
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter)

  // Enable CORS (Cross-Origin Resource Sharing)
  app.enableCors()

  // Start the server and listen on the specified port and IP
  await app.listen(envService.get<number>('PORT') || '4015', '0.0.0.0')
  logger.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
