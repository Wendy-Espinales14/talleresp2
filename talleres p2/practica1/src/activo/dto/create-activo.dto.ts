import { IsNotEmpty, IsString } from "class-validator";
export class CreateActivoDto {
    @IsString()
    @IsNotEmpty()
    activoti:string;

}
