import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import TwitterProfile from '../auth/twitterProfile.entity';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ){}

    async findOne(twitterId: string): Promise<Users> {
        return this.usersRepository.findOne({twitterId});
    }

    async findOneById(id: number): Promise<Users> {
        return this.usersRepository.findOne({id});
    }

    async create(token: string, tokenSecret: string, profile: TwitterProfile) {
        const newUser = this.usersRepository.create();
        newUser.twitterId = profile.id;
        newUser.screenName = profile.username;
        newUser.iconUrl = profile.photos[0].value;
        return await this.usersRepository.save(newUser);
    }
}
