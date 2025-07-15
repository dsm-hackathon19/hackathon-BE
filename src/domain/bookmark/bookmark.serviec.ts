import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Bookmark } from "./entities/bookmark.entities";
import { BookMarkCreateReqDto } from "./dto/request/bookmark.create";
import { BookMarkReadReqDto } from "./dto/request/bookmark.read";
import { BookMarkUpdateReqDto } from "./dto/request/bookmark.update";
import { BookMarkDeleteReqDto } from "./dto/request/bookmark.delete";
import { InjectRepository } from '@nestjs/typeorm';
import { BookMarkReadAllReqDto } from "./dto/request/bookmark.readall";

@Injectable()
export class BookMarkService{
    constructor(
        @InjectRepository(Bookmark)
        private bookMarkRepository: Repository<Bookmark>, 
    ){}

    async createBookMark(data:BookMarkCreateReqDto){
        const {bookmark,user_id} = data;
        
        await this.bookMarkRepository.save({ 
            bookmark,
            user_id
        });
    }

    
    async readBookMarkAll(data: BookMarkReadAllReqDto) {
        const {user_id } = data;
      
        const bookmark = await this.bookMarkRepository.findBy({ user_id });
      
        if (!bookmark || bookmark.length === 0) {
          throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        }
      
        return {
            bookmarks: bookmark.map(b => ({
                id: b.id,
                bookmark: b.bookmark,
            })),
        };
      }

    
    
    async readBookMark(data: BookMarkReadReqDto) {
        const { id, user_id } = data;
      
        const bookmark = await this.bookMarkRepository.findOneBy({ id, user_id });
      
        if (!bookmark) {
          throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        }
      
        return {
          bookmark: bookmark.bookmark,
        };
      }
      
    async updateBookMark(data:BookMarkUpdateReqDto){
        const {newBookMark,id,user_id} = data;
        try{
        const bookmark = await this.bookMarkRepository.findOneBy({ id, user_id });

        if(!bookmark){
            throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND);
        }

        const updateData={
            bookmark: data.newBookMark || bookmark.bookmark,
        }

        await this.bookMarkRepository.update(bookmark.id, updateData);

        }catch(error){
            console.error('북마크 수정 실패:', error.message);
            throw new InternalServerErrorException('북마크 수정 중 오류가 발생했습니다.');
        }
    }

        async deleteBookMark(data:BookMarkDeleteReqDto){
            const {id,user_id} = data;

            try{
            const bookmark = await this.bookMarkRepository.findOneBy({id,user_id})
            
            if(!bookmark){
                throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
            }
            await this.bookMarkRepository.delete({id,user_id})

            return {statusCode: HttpStatus.OK };
            }catch(error){
                console.error('북마크 삭제 실패:', error.message);
                throw new InternalServerErrorException('북마크 삭제 중 오류가 발생했습니다.');
            }
        }
        
    }