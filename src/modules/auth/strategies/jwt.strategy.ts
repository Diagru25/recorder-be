import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import keys from '../../../configs/keys';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: keys.jwt.JWT_SECRET,
      });
  }

  async validate(payload: any) {
      return {
          id: payload.sub,
          username: payload.username,
      }
  }
}
