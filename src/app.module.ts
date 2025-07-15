// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './global/data.source';
import { BookMarkModule } from './domain/bookmark/bookmark.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,  //datasour
    }),
    BookMarkModule,
  ],
})
export class AppModule {}
