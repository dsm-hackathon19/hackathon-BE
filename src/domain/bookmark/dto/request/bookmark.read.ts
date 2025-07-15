import { IsNotEmpty, IsUUID } from "class-validator";

export class BookMarkReadReqDto{
    @IsNotEmpty()
    @IsUUID()
    id:string;

    @IsNotEmpty()
    user_id:string;   
}