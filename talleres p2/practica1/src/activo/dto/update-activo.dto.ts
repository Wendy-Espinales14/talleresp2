import { PartialType } from '@nestjs/mapped-types';
import { CreateActivoDto } from './create-activo.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateActivoDto extends PartialType(CreateActivoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;

}
