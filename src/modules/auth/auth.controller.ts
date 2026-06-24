import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from '../users/dto/register-auth.dto';
import { LoginAuthDto } from '../users/dto/login-auth.dto';
import { AuthService } from './auth.service'; // Asegúrate de importar tu servicio

@Controller('auth')
export class AuthController {
  // El constructor debe ir dentro de la clase
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObj: RegisterAuthDto) {
    console.log(userObj);
    return userObj;
  }

  @Post('login')
  login(@Body() credenciales: LoginAuthDto) {
    return this.authService.login(credenciales);
  }
}
