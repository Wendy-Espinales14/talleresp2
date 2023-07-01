import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoResolver } from './activo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activo } from './entities/activo.entity';

@Module({
  providers: [ActivoResolver, ActivoService],
  imports:[
    TypeOrmModule.forFeature([Activo])
  ]
})
export class ActivoModule {}
