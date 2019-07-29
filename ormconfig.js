module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/db/migrations/**/*.ts'],
    cli: {
        migrationsDir: 'src/db/migrations',
        subscribersDir: 'src/db/subscribers'
    },
    synchronize: true,
    logging: true,
}
