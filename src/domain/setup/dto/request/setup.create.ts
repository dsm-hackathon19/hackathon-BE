import { IsNotEmpty } from "class-validator";

export class SetupCreateRequestDTO{
    @IsNotEmpty()
    progress: String;

    @IsNotEmpty()
    study_time: Date;

    @IsNotEmpty()
    level: String;

    @IsNotEmpty()
    levelPrefer: number;

    @IsNotEmpty()
    user_id: String;
}