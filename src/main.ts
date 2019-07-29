import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.use(session({ 
        secret: 'hello-nest',
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true }
    }));
    await app.listen(process.env.PORT);
}
bootstrap();
