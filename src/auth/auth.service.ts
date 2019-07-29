import { Injectable } from '@nestjs/common';
import TwitterProfile from './twitterProfile.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(token: string, tokenSecret: string, profile: TwitterProfile): Promise<any> {
        let user = await this.usersService.findOne(profile.id);
        if(!user) {
            user = await this.usersService.create(token, tokenSecret, profile);
        }
        return user;
    }
}
