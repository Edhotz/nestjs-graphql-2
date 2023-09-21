import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field()
  key: string;
}


