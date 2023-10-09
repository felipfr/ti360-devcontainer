import { ConfigModule } from '@nestjs/config'
import { GetUsersModule } from '@/presentation/routes/get-users/get-users.module'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { httpAgentConfig } from '@/infra/config/http-config'

const DEFAULT_TIMEOUT_MS = 30 * 1000

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env']
    }),
    HttpModule.registerAsync({
      useFactory: () => ({ ...httpAgentConfig, timeout: DEFAULT_TIMEOUT_MS }),
      inject: [REQUEST]
    }),
    GetUsersModule
  ],
  providers: []
})
export class AppModule {}
