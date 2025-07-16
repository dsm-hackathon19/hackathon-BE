import { IsNotEmpty } from "class-validator";

export class MemoReadResDto{
    @IsNotEmpty()
    text:string;
}