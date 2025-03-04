import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { staticModules } from './config/static.module';
import { dynamicModules } from './config/dynamic.module';

@Module({
    imports: [...staticModules, ...dynamicModules],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
