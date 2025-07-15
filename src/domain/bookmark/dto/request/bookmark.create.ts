import { IsNotEmpty, IsString } from "class-validator";

export class BookMarkCreateReqDto{
    @IsNotEmpty()   
    bookmark:string;

    @IsNotEmpty()
    user_id:string;   
}