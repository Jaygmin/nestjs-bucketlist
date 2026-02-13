import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm.config';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      load: [typeorm],
    }),
    DataBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
