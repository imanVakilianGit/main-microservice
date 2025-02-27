import { configDotenv } from 'dotenv';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    configDotenv();

    const host: string = process.env.HOST;
    const port: number = Number(process.env.PORT);

    const app: INestMicroservice = await NestFactory.createMicroservice<TcpOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            host,
            port,
        },
    });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            // whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    await app.listen();
    console.log(`app running on host: ${host} and port: ${port}`);
}
bootstrap();
