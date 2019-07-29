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
        const user = req.user;
        req.session.user = req.user;
        res.redirect(`/api/users/${user.id}`);
    }
}
