import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ActivoService } from './activo.service';
import { Activo } from './entities/activo.entity';
import { CreateActivoInput } from './dto/create-activo.input';
import { UpdateActivoInput } from './dto/update-activo.input';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Activo)
export class ActivoResolver {
  constructor(private readonly activoService: ActivoService) {}

  @Mutation(() => Activo)
  async createActivo(@Args('createActivoInput') createActivoInput: CreateActivoInput)
  :Promise<Activo> {
    return this.activoService.create(createActivoInput);
  }

  @Query(() => [Activo], { name: 'activos' })
  async findAll():Promise<Activo[]> {
    return this.activoService.findAll();
  }

  @Query(() => Activo, { name: 'activo' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Activo> {
    return this.activoService.findOne(id);
  }

  @Mutation(() => Activo)
  updateActivo(@Args('updateActivoInput') updateActivoInput: UpdateActivoInput): Promise<Activo> {
    return this.activoService.update(updateActivoInput.id, updateActivoInput);
  }

  @Mutation(() => Activo)
  removeActivo(@Args('id', { type: () => ID }) id: string): Promise<Activo> {
    return this.activoService.remove(id);
  }
}
