import { Controller, Request, Req, Res, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './loggedIn.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('twitter'))
    @Get('twitter')
    login(){}

    @UseGuards(AuthGuard('twitter'))
    @Get('twitter/callback')
    async twitterCallback(@Req() req, @Res() res) {
        console.log('------------callback-------------');
        console.log(req.session);
        console.log(req.user);
        console.log('------------callback-------------');
        req.session.user = req.user;
        res.redirect('/api/auth/user');
    }


    //@UseGuards(LoggedInGuard)
    @UseGuards(LoggedInGuard)
    @Get('user')
    getProfile(@Request() req) {
        const user = req.session.user;
        return user;
    }
}
