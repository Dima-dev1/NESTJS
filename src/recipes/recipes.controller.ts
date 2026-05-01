import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { RecipesService } from './recipes.service.js';
import { CreateRecipeDto } from './dto/create-recipe.dto.js';
import { UpdateRecipeDto } from './dto/update-recipe.dto.js';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}
  @Post()
  create(@Body() dto: CreateRecipeDto) {
    return this.recipesService.create(dto);
  }
  @Get()
  getAll() {
    return this.recipesService.getAll();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.getById(id);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.remove(id);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRecipeDto) {
    return this.recipesService.update(id, dto);
  }
}
