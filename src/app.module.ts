import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookMarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [BookMarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
