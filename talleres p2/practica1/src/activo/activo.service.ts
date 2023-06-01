import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { Activo } from './entities/activo.entity';

@Injectable()
export class ActivoService {
  private activos: Activo[]=[
    {id:1, activoti:'ACTIVO TI 1 ', estado:true},
    {id:2, activoti:'ACTIVO TI 2',  estado:true},
  ]

  create(createactivoDto: CreateActivoDto) {
    const activo = new Activo();
    activo.id=  Math.max( ... this.activos.map(elemento => elemento.id),0 )+1 ;
    activo.activoti= createactivoDto.activoti;
    this.activos.push(activo);
    return activo;
  }

  findAll() : Activo[] {
    return this.activos;
  }

  findOne(id: number) {
    const activo =  this.activos.find(activo=> activo.id===id);
    if (!activo) throw new NotFoundException(`ID ${id} not found`)
    return activo;
  }

  update(id: number, updateactivoDto: UpdateActivoDto) {
    const {  activoti,  estado   } = updateactivoDto;
    const activo = this.findOne(id);
    if (activoti) activo.activoti= activoti;
    if (estado!= undefined) activo.estado= estado;

    this.activos =  this.activos.map( elemento=> {
      if (elemento.id===id) return activo;
      return elemento;
    } )

    return activo;

  }

  remove(id: number) {
    this.findOne(id);
    this.activos =  this.activos.filter(elemento=> elemento.id!== id);
  }
}
