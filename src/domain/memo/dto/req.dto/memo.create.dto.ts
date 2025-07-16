import { IsNotEmpty, IsString } from "class-validator";


export class MemoCreateRequestDto{
    @IsNotEmpty()
    @IsString()
    memo:string;

    @IsNotEmpty()
    person:string;
    
    @IsNotEmpty()
    user_id:string
}