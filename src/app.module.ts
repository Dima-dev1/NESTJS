import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
// import { TodoModule } from './todo/todo.module.js';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module.js';
import { UserModule } from './users/users.module.js';
import { CommentsModule } from './comments/comments.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    // TodoModule,
    RecipesModule,
    UserModule,
    CommentsModule,
  ],
})
export class AppModule {}
