import { IsNotEmpty } from "class-validator";

export class MemoDeleteReqDto{
    @IsNotEmpty()
    id:string;

    @IsNotEmpty()
    user_id:string

}