import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { staticModules } from './config/static.module';

@Module({
    imports: [...staticModules],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
