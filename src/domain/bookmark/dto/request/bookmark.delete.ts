import { IsNotEmpty, IsUUID } from "class-validator";

export class BookMarkDeleteReqDto{
    @IsNotEmpty()
    @IsUUID()
    id:string;

    @IsNotEmpty()
    user_id:string;   
}