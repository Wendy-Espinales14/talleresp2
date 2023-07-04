import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteSchema } from './schema/paciente.schema';
import { PACIENTE } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteController } from './paciente.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PACIENTE.name,
        useFactory: () => PacienteSchema,
      },
    ]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService]
})
export class PacienteModule {}
