import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async checkUserData(username: string, password: string): Promise<any> {
        console.log('AuthService - checkUserData')
        
        const user = await this.usersService.getUser(username)
        
        if(user && user.password === password) {
            const user = await this.usersService.getUser(username)
            return user
        }

        return null
    }
}
