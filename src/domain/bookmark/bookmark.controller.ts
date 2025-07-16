import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { BookMarkCreateReqDto } from "./dto/request/bookmark.create";
import { BookMarkReadAllReqDto } from "./dto/request/bookmark.readall";
import { BookMarkUpdateReqDto } from "./dto/request/bookmark.update";
import { BookMarkDeleteReqDto } from "./dto/request/bookmark.delete";
import { BookMarkService } from './bookmark.service';
import { BookMarkReadReqDto } from "./dto/request/bookmark.read";

@Controller('bookmark')
export class BookMarkController{
  constructor(private readonly BookMarkService: BookMarkService) { }  
    
    @Post('/create')
    async create(
        @Body(new ValidationPipe()) data:BookMarkCreateReqDto
    ){
        const result = await this.BookMarkService.createBookMark(data);
        return result
    }

    @Get('/read/all/:user_id')//param으로 userid를 받아라
    async readAll(@Param() data: BookMarkReadAllReqDto){
        return this.BookMarkService.readBookMarkAll(data);
    }

   @Get('/read/:id/:user_id')
   async read(@Param() data: BookMarkReadReqDto) {
        return this.BookMarkService.readBookMark(data);
  }

  @Patch('/update')
  async update(
    @Body(new ValidationPipe()) data:BookMarkUpdateReqDto
  ){
    const result = await this.BookMarkService.updateBookMark(data);
    return result
  }

  @Delete('/delete')
  async delete(
    @Body(new ValidationPipe()) data:BookMarkDeleteReqDto
  ){
    const result = await this.BookMarkService.deleteBookMark(data);
    return result
  }
} 


