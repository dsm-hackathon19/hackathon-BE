import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from "@nestjs/common";
import { MemoCreateRequestDto } from "./dto/req.dto/memo.create.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MemoUpdateRequestDto } from "./dto/req.dto/memo.update.dto";
import { Memo } from "./entities/memo.entities";
import { MemoDeleteReqDto } from "./dto/req.dto/memo.delete.dto";
import { MemoReadRequestDto } from "./dto/req.dto/memo.read.dto";

@Injectable()
export class MemoService{
constructor(
    @InjectRepository(Memo)
    private memoRepository:Repository<Memo>

){}

async createMemo(data:MemoCreateRequestDto){
    const {memo,person,user_id} = data;
    
    if(!user_id){
        throw new HttpException('user_id NOTFOUND',HttpStatus.NOT_FOUND)
    }
    
    await this.memoRepository.save({
        memo,  
        person,
        user_id
    })

    return {StatusCode:HttpStatus.CREATED}
}

async readMemo(data: MemoReadRequestDto) {
    const { id, user_id } = data;

    console.log(id,user_id)
    const memo = await this.memoRepository.findOne({where : {id: id , user_id : user_id}});
    if (!memo) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return {
      memo: memo.memo,
    };
  }

async updateMemo(data: MemoUpdateRequestDto) {
    const {id,user_id,new_memo} = data;
    try{
        const memo = await this.memoRepository.findOneBy({ id, user_id });
        
        if(!memo){
            throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND);
        }
        
        const updateData={
            memo: new_memo || memo.memo,  
        }
        
        await this.memoRepository.update(id, updateData);
        return {statusCode: HttpStatus.OK};
    }catch(error){
        console.error('메모 수정 실패:', error.message);
        throw new InternalServerErrorException('메모 수정 중 오류가 발생했습니다.');
    }
}

async deleteMemo(data:MemoDeleteReqDto){
    try{
        const {user_id,id} = data;
        const memo = await this.memoRepository.findOneBy({id,user_id})
        
        if(!memo){
            throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        }
        await this.memoRepository.delete({id,user_id})
        
        return {statusCode: HttpStatus.NO_CONTENT};
    }catch(error){
        console.error('메모 삭제 실패:', error.message);  
        throw new InternalServerErrorException('메모 삭제 중 오류가 발생했습니다.');  
    }
}
}
