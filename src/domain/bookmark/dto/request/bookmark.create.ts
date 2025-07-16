import { IsNotEmpty, IsString } from "class-validator";

export class BookMarkCreateReqDto{
    @IsNotEmpty()   
    book_mark:string;

    @IsNotEmpty()
    user_id:string;   
}