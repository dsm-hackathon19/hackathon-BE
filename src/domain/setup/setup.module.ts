import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { Setup } from "./entities/setup.entities";
import { SetupService } from "./setup.service";
import { SetupController } from "./setup.controller";


@Module({
  imports: [TypeOrmModule.forFeature([Setup]),
  ], 

  providers: [SetupService], //이 모듈에서 제공하는 서비스나 의존성 주입을 위한 프로바이더 목록
  controllers: [SetupController],  //이 모듈이 제공하는 API 엔드포인트를 관리하는 컨트롤러 목록.
  exports: [SetupService] //이 모듈이 다른 모듈에서 사용할 수 있도록 내보내는 목록.
})
export class SetUpModule { }