import { IsNotEmpty, IsString, isString } from "class-validator";

export class MemoReadAllRequestDto{

    @IsNotEmpty()
    @IsString()
    user_id:string;
}