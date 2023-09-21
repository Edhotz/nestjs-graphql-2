import { CreateDiciplineInput } from './create-dicipline.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDiciplineInput extends PartialType(CreateDiciplineInput) {
  @Field(() => ID)
  id?: string;
}
