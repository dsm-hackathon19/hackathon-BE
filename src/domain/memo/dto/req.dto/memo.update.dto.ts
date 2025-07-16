import { IsNotEmpty, IsString } from "class-validator";

export class MemoUpdateRequestDto{
    @IsNotEmpty()
    @IsString()
    id:string;
    
    @IsNotEmpty()
    @IsString()
    new_memo:string;

    @IsNotEmpty()
    @IsString()
    user_id:string;
}