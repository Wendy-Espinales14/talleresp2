import { IsNotEmpty, IsString } from "class-validator";
export class CreatePacienteDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;


    @IsString()
    @IsNotEmpty()
    identificacion:string;

}
