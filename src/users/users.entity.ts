import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IUsers } from './users.interface';

@Entity()
export class Users extends BaseEntity implements IUsers {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    readonly twitterId: string;

    @Column()
    screenName: string;

    @Column('text', { default: null})
    iconUrl?: string | null = null;

    constructor(
        readonly twitterId: string,
        readonly screenName: string
    ) {
        this.twitterId = twitterId;
        this.screenName = screenName;
    }
}
