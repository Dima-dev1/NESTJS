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
import { TodoService } from './todo.service.js';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }
  @Get()
  getAll() {
    return this.todoService.getAll();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getById(id);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.remove(id);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTodoDto) {
    return this.todoService.update(id, dto);
  }
}
