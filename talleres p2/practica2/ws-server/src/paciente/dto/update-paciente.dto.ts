import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
