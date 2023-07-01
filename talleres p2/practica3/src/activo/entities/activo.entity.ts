import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'activos'})
@ObjectType()
export class Activo {
  @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    activoti:string;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;
}
