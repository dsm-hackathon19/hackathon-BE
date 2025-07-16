import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Bookmark } from 'src/domain/bookmark/entities/bookmark.entities';
import { Memo } from 'src/domain/memo/entities/memo.entities';
import { User } from 'src/domain/user/entities/user.entitiy';
import { Setup } from 'src/domain/setup/entities/setup.entities';


// .env 파일 로드
config();

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Bookmark, Memo,User,Setup], 
  synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
  logging: process.env.DB_LOGGING === 'true' || true,
  driver: require("mysql2")
});