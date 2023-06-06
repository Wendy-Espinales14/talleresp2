import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePacienteDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

}

