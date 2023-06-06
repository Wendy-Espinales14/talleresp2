import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Paciente } from '../paciente/entities/paciente.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PacienteService } from 'src/paciente/paciente.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       paciente: Paciente
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Paciente)
     private readonly pacienteRepository: Repository<Paciente>,
     private readonly pacienteService: PacienteService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.pacienteService.prueba());
        const paciente =await  this.pacienteRepository.findOneBy({ nombre: name });
        if (!paciente) throw new Error('paciente no encontrado');
        if (!paciente.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, paciente: paciente};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].paciente.nombre;
    }
}
