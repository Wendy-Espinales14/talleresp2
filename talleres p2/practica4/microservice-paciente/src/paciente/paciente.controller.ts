import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PacienteService } from './paciente.service';
import { PacienteDTO } from './dto/paciente.dto';
import { PacienteMsg } from 'src/common/constants';


@Controller()
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @MessagePattern(PacienteMsg.CREATE)
  create(@Payload() pacienteDTO: PacienteDTO) {
    return this.pacienteService.create(pacienteDTO);
  }

  @MessagePattern(PacienteMsg.FIND_ALL)
  findAll() {
    return this.pacienteService.findAll();
  }

  @MessagePattern(PacienteMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.pacienteService.findOne(id);
  }
  @MessagePattern(PacienteMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.pacienteService.update(payload.id, payload.pacienteDTO);
  }

  @MessagePattern(PacienteMsg.DELETE)
  delete(@Payload() id: string) {
    return this.pacienteService.delete(id);
  }
}
