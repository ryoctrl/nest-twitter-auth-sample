import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './

@Module({
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
