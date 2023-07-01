import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';


@InputType()
export class CreateActivoInput {
  @Field(()=>String )
  @IsNotEmpty()
  activoti:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;
}
