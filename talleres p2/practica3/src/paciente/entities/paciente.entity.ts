import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'pacientes'})
@ObjectType()
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;


    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
