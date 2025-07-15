import { Body, Controller, Delete, Get, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { BookMarkCreateReqDto } from "./dto/request/bookmark.create";
import { BookMarkReadAllReqDto } from "./dto/request/bookmark.readall";
import { BookMarkReadReqDto } from "./dto/request/bookmark.read";
import { BookMarkUpdateReqDto } from "./dto/request/bookmark.update";
import { BookMarkDeleteReqDto } from "./dto/request/bookmark.delete";
import { BookMarkService } from './bookmark.service';

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


    @Get('/read/all')
    async readAll(@Query() data: BookMarkReadAllReqDto){
        return this.BookMarkService.readBookMarkAll(data);
    }

   @Get('/read')
   async read(@Query() data: BookMarkReadReqDto) {
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


