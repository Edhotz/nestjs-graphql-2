import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Dicipline } from './entities/dicipline.entity';
import { DiciplineDTO } from './dto/dicipline.dto';
import { CreateDiciplineInput } from './dto/create-dicipline.input';
import { UpdateDiciplineInput } from './dto/update-dicipline.input';

@Module({
  imports: [NestjsQueryGraphQLModule.forFeature({
    imports: [NestjsQueryTypeOrmModule.forFeature([Dicipline])],
    resolvers: [
      {
        DTOClass: DiciplineDTO,
        EntityClass: Dicipline,
        CreateDTOClass: CreateDiciplineInput,
        UpdateDTOClass: UpdateDiciplineInput,
        enableTotalCount: true,
        pagingStrategy: PagingStrategies.OFFSET
      }
    ]
  })
  ],
  providers: [

  ]
})
export class DiciplinesModule { }
