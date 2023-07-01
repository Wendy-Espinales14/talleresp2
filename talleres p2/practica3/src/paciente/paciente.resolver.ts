import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { ParseUUIDPipe } from '@nestjs/common';


@Resolver(() => Paciente)
export class PacienteResolver {
  constructor(private readonly pacienteService: PacienteService) {}

  @Mutation(() => Paciente)
  async createPaciente(@Args('createPacienteInput') createPacienteInput: CreatePacienteInput)
  :Promise<Paciente> {
    return this.pacienteService.create(createPacienteInput);
  }

  @Query(() => [Paciente], { name: 'pacientes' })
  async findAll():Promise<Paciente[]> {
    return this.pacienteService.findAll();
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Paciente> {
    return this.pacienteService.findOne(id);
  }

  @Mutation(() => Paciente)
  updatePaciente(@Args('updatePacienteInput') updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    return this.pacienteService.update(updatePacienteInput.id, updatePacienteInput);
  }

  @Mutation(() => Paciente)
  removePaciente(@Args('id', { type: () => ID }) id: string): Promise<Paciente> {
    return this.pacienteService.remove(id);
  }
}
