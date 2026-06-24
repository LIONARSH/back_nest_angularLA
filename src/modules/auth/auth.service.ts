import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from '../users/dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(loginAuthDto: LoginAuthDto) {
    const payload = { email: loginAuthDto.email, id: 1 };
    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}
