import { IsNotEmpty, IsUUID } from "class-validator";

export class BookMarkUpdateReqDto{
    @IsNotEmpty()
    @IsUUID()
    id:string;

    @IsNotEmpty()
    user_id:string;   

    @IsNotEmpty()   
    new_book_mark:string;
}