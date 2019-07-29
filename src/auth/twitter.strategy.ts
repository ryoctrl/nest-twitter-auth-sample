import { Strategy } from 'passport-twitter';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: process.env.TWITTER_CALLBACK_URL
        });
        console.log(process.env.TWITTER_CALLBACK_URL);
    }

    async validate(token, tokenSecret, profile): Promise<any> {
        const user = await this.authService.validateUser(token, tokenSecret, profile);
        console.log('logged in user is ', user);
        return user;
    }
}
