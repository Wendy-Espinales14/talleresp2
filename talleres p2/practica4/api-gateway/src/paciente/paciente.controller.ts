import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PacienteMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { PacienteDTO } from './dto/paciente.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IPaciente } from 'src/common/interfaces/paciente.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('pacientes')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/paciente')
export class PacienteController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPaciente = this.clientProxy.clientProxyPacientes();

  @Post()
  create(@Body() pacienteDTO: PacienteDTO): Observable<IPaciente> {
    return this._clientProxyPaciente.send(PacienteMSG.CREATE, pacienteDTO);
  }

  @Get()
  findAll(): Observable<IPaciente[]> {
    return this._clientProxyPaciente.send(PacienteMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPaciente> {
    return this._clientProxyPaciente.send(PacienteMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() pacienteDTO: PacienteDTO): Observable<IPaciente> {
    return this._clientProxyPaciente.send(PacienteMSG.UPDATE, { id, pacienteDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPaciente.send(PacienteMSG.DELETE, id);
  }
}
