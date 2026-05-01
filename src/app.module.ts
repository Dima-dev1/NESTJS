import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
// import { TodoModule } from './todo/todo.module.js';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    // TodoModule,
    RecipesModule,
  ],
})
export class AppModule {}
