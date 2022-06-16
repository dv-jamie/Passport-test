import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Request() req
        // @Body() userData: any
    ): Promise<any> {
        console.log('AuthController - login')
        
        return req.user
        // return await this.authService.checkUserData(userData.username, userData.password)
    }
}
