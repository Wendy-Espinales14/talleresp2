import { PacienteDTO } from './dto/paciente.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PACIENTE } from 'src/common/models/models';
import { IPaciente } from 'src/common/interfaces/paciente.interface';

@Injectable()
export class PacienteService {
  constructor(@InjectModel(PACIENTE.name) private readonly model: Model<IPaciente>) {}

  
  async create(pacienteDTO: PacienteDTO): Promise<IPaciente> {
    const newPaciente = new this.model(pacienteDTO);
    return await newPaciente.save();
  }

  async findAll(): Promise<IPaciente[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IPaciente> {
    return await this.model.findById(id);
  }

  async update(id: string, pacienteDTO: PacienteDTO): Promise<IPaciente> {
    return await this.model.findByIdAndUpdate(id, pacienteDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
