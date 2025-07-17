import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { MemoService } from "./memo.service";
import { MemoCreateRequestDto } from "./dto/req.dto/memo.create.dto";
import { MemoReadRequestDto } from "./dto/req.dto/memo.read.dto";
import { MemoUpdateRequestDto } from "./dto/req.dto/memo.update.dto";
import { MemoDeleteReqDto } from "./dto/req.dto/memo.delete.dto";

@Controller('memo')
export class MemoController{
    constructor(private readonly MemoService: MemoService) { }  
    
    @Post('/create')
    async create(
        @Body(new ValidationPipe()) data:MemoCreateRequestDto
    ){
        const result = await this.MemoService.createMemo(data);
        return result
    }

    @Get('/read/:user_id') 
    async readMemoAll(@Param() data: MemoReadRequestDto) {
        console.log(data);
        const result = await this.MemoService.readMemo(data);
        return result;
    }r

    @Get('/read/:user_id/:id') 
    async readMemo(@Param() data: MemoReadRequestDto) {
        console.log(data);
        const result = await this.MemoService.readMemo(data);
        return result;
    }

  @Patch('/update')
  async update(
    @Body(new ValidationPipe()) data:MemoUpdateRequestDto
  ){
    const result = await this.MemoService.updateMemo(data);
    return result
  }

  @Delete('/delete')
  async delete(
    @Body(new ValidationPipe()) data:MemoDeleteReqDto
  ){
    const result = await this.MemoService.deleteMemo(data);
    return result
  }

}