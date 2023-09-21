import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './modules/student/student.module';
import { BasesModule } from './modules/bases/bases.module';
import { DiciplinesModule } from './modules/diciplines/diciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'edmauro',
      password: 'docker',
      database: 'api-graphql',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
      logging: true
    }),
    ConfigModule.forRoot({}),
    StudentModule,
    BasesModule,
    DiciplinesModule,
    LessonsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
