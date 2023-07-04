import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { PacienteController } from './paciente.controller';

@Module({
  imports: [ProxyModule],
  controllers: [PacienteController],

})
export class PacienteModule {}
