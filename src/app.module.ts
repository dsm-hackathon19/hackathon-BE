// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookMarkModule } from './bookmark/bookmark.module';
import { dataSource } from './global/data.source';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options, 
    }),
    BookMarkModule,
  ],
})
export class AppModule {}
