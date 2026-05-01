import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service.js';
import { RecipesController } from './recipes.controller.js';

@Module({
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
