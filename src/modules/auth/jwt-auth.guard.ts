import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// 1. Definimos la interfaz para el Payload del Token
interface JwtPayload {
  sub: string;
  username: string;
}

// 2. La Estrategia (El código que ya tenías)
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'MI_CODIGO_SECRETO',
    });
  }

  validate(payload: JwtPayload) {
    return { userId: payload.sub, username: payload.username };
  }
}

// 3. El Guard (Lo que le faltaba al archivo para que el controlador no falle)
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
