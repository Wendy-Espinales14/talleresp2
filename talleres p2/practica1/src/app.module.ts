import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ActivoModule } from './activo/activo.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [EstudianteModule, ActivoModule, PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
