import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";
import { BaseDTO } from "src/modules/bases/dto/BaseDTO";


@ObjectType('discipline')
export class DiciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
