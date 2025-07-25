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
        const {book_mark,user_id} = data;
        
        if(!user_id){
            throw new HttpException('user_id NOTFOUND',HttpStatus.UNAUTHORIZED)//user_id가 없음
        }
        
        await this.bookMarkRepository.save({ 
            book_mark,
            user_id
        });
        return {StatusCode:HttpStatus.CREATED}
    }

    
    async readBookMarkAll(data: BookMarkReadAllReqDto) {
        const {user_id} = data;
      
        if (!user_id) {
            throw new HttpException('User ID is required', HttpStatus.BAD_REQUEST);
        }

        const bookmark = await this.bookMarkRepository.findBy({ user_id });
      
        if (!bookmark || bookmark.length === 0) {
          throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        }
        return {
            bookmarks: bookmark.map(b => ({
                id: b.id,
                bookmark: b.book_mark,
            })),
        };
      }

    async readBookMark(data: BookMarkReadReqDto) {
        const { id, user_id } = data;

        const bookmark = await this.bookMarkRepository.findOne({where : {id: id , user_id : user_id}});
        
        if (!bookmark) {
          throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        }

        return {
          bookmark: bookmark.book_mark,
        };
      }
      
    async updateBookMark(data:BookMarkUpdateReqDto){
        const {new_book_mark,id,user_id} = data;
        try{
        const bookmark = await this.bookMarkRepository.findOneBy({ id, user_id });

        if(!bookmark){
            throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND);
        }

        const updateData={
            book_mark: new_book_mark || bookmark.book_mark,
        }

        await this.bookMarkRepository.update(bookmark.id, updateData);

        return {statusCode: HttpStatus.OK};
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

            return {statusCode: HttpStatus.NO_CONTENT};
            }catch(error){
                console.error('북마크 삭제 실패:', error.message);
                throw new InternalServerErrorException('북마크 삭제 중 오류가 발생했습니다.');
            }
        }
        
    }