// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './global/data.source';
import { BookMarkModule } from './domain/bookmark/bookmark.module';
import { SetUpModule } from './domain/setup/setup.module';
import { MemoModule } from './domain/memo/memo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,  //datasource 파일 불러오기
    }),
    BookMarkModule,
    SetUpModule,
    MemoModule
  ],
})
export class AppModule {}
