import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}
