import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import keys from 'src/configs/keys';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [DatabaseModule,PassportModule],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(AuthController)
    }
}
