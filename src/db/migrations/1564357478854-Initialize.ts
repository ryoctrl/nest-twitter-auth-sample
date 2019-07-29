import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1564357478854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `twitterId` varchar(255) NOT NULL, `screenName` varchar(255) NOT NULL, `iconUrl` text NULL DEFAULT null, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
