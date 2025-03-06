import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const dynamicModules = [
    ConfigModule.forRoot({
        isGlobal: true,
        // envFilePath: `${process.cwd()}/.env`,
    }),
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => {
            return {
                type: 'postgres',
                database: configService.getOrThrow<string>('DATABASE_NAME'),
                host: configService.getOrThrow<string>('DATABASE_HOST'),
                port: configService.getOrThrow<number>('DATABASE_PORT'),
                password: configService.getOrThrow<string>('DATABASE_PASSWORD'),
                username: configService.getOrThrow<string>('DATABASE_USERNAME'),
                entities: [`${process.cwd()}/**/database/type-orm/entity/*.entity.(ts|js)`],
                migrations: [`${process.cwd()}/**/database/type-orm/migration/*.js`],
                synchronize: false,
            };
        },
        inject: [ConfigService],
    }),
];
