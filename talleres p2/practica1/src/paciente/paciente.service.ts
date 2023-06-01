import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  private pacientes: Paciente[]=[
    {id:1, identificacion:'1' , nombre:'Wendy ',  estado:true},
    {id:2, identificacion:'2' , nombre:'Santiago',  estado:true},
  ]

  create(createpacienteDto: CreatePacienteDto) {
    const paciente = new Paciente();
    paciente.id=  Math.max( ... this.pacientes.map(elemento => elemento.id),0 )+1 ;
    paciente.nombre= createpacienteDto.nombre;
    paciente.identificacion= createpacienteDto.identificacion;
    this.pacientes.push(paciente);
    return paciente;
  }

  findAll() : Paciente[] {
    return this.pacientes;
  }

  findOne(id: number) {
    const paciente =  this.pacientes.find(paciente=> paciente.id===id);
    if (!paciente) throw new NotFoundException(`ID ${id} not found`)
    return paciente;
  }

  update(id: number, updatepacienteDto: UpdatePacienteDto) {
    const { identificacion, nombre, estado   } = updatepacienteDto;
    const paciente = this.findOne(id);
    if (nombre) paciente.nombre= nombre;

    if (estado!= undefined) paciente.estado= estado;

    this.pacientes =  this.pacientes.map( elemento=> {
      if (elemento.id===id) return paciente;
      return elemento;
    } )

    return paciente;

  }

  remove(id: number) {
    this.findOne(id);
    this.pacientes =  this.pacientes.filter(elemento=> elemento.id!== id);
  }
}
