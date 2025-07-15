import { IsNotEmpty, IsUUID } from "class-validator";

export class BookMarkReadAllReqDto{
    @IsNotEmpty()
    user_id:string;   
}