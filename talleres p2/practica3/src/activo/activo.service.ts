import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivoInput, UpdateActivoInput } from './dto';
import { Activo } from './entities/activo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivoService {
  constructor( 
    @InjectRepository(Activo)
    private readonly activosRepository:Repository<Activo> ){}

  async create(createActivoInput: CreateActivoInput): Promise<Activo>  {
    const newActivo= this.activosRepository.create(createActivoInput);
    return await this.activosRepository.save(newActivo); 
  }

  async findAll(): Promise<Activo[]> {
    return this.activosRepository.find();
  }

  async findOne(id: string): Promise<Activo> {
     const activo= await  this.activosRepository.findOneBy({id});
     if (!activo) throw new NotFoundException(`Not found`)
     return activo;
  }

  async update(id: string, updateActivoInput: UpdateActivoInput): Promise<Activo> {
    
    const activo = await this.activosRepository.preload(updateActivoInput);
    if (!activo) throw new NotFoundException(`Not found`)
    return this.activosRepository.save(activo);

  }

  async remove(id: string): Promise<Activo> {

    const activo= await  this.findOne(id);

    await this.activosRepository.remove(activo);

    return {...activo, id};

  }
}
