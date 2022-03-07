import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/modules/database/services/auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async validate(
    req: any,
    username: string,
    password: string,
  ): Promise<any> {
    //console.log(req.connection.remoteAddress);
    const result = await this.authService.validateUser(username, password, req.ip);

    if (!result.isValidate) throw new UnauthorizedException(result.description);

    return result.user;
  }
}
