import { Controller, UseGuards, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoggedInGuard } from '../auth/loggedIn.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}
    @Get(':id')
    @UseGuards(LoggedInGuard)
    async findOneById(@Param('id') id) {
        return this.usersService.findOneById(id);
    }
}
