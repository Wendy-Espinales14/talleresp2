import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {
  private readonly logger = new Logger('PacienteService');

  constructor( 
    @InjectRepository(Paciente) 
    private readonly pacienteRepository: Repository<Paciente>,

    ){}

  
  async create(createPacienteDto: CreatePacienteDto) {
    try {
      const paciente =  this.pacienteRepository.create(createPacienteDto);
      await this.pacienteRepository.save(paciente);
      return paciente;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.pacienteRepository.find({});
  }

  async findOne(id: string) {
    const paciente= await  this.pacienteRepository.findOneBy ({ id });
    if (!paciente)
      throw new NotFoundException(`paciente ${id} no encontrado`);
    return paciente;

  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto) {
    const paciente = await this.pacienteRepository.preload({
      id: id,
      ...updatePacienteDto
    });
    if (!paciente) throw new NotFoundException(`paciente ${id} no encontrado`)

    try {
      await  this.pacienteRepository.save(paciente)
      return paciente;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const paciente = await this.findOne(id);
    await this.pacienteRepository.remove(paciente);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
