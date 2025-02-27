import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const host: string = process.env.HOST;
    const port: number = Number(process.env.PORT);

    const app: INestMicroservice = await NestFactory.createMicroservice<TcpOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            host,
            port,
        },
    });

    await app.listen();
    console.log(`app running on host: ${host} and port: ${port}`);
}
bootstrap();
