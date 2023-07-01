import { IsUUID } from 'class-validator';
import { CreateActivoInput } from './create-activo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateActivoInput extends PartialType(CreateActivoInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
