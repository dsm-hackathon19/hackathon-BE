import { IsNotEmpty, IsString, isString } from "class-validator";

export class MemoReadRequestDto{
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    user_id:string;
}