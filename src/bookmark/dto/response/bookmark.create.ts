import { IsNotEmpty } from "class-validator";

export class BookMarkCreateResDto{
    @IsNotEmpty()   
    bookmark:string;
}