/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, UsePipes, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleGuard } from './guard/role.guard';
import { Role } from './decorator/role.decorator';
import { type UserPagination, UserRole } from './types/users.types';
import { NamePipe } from './pipe/name.pipe';
import { EmailPipe } from './pipe/email.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { AuthTokenGuard } from './guard/auth-token.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @UseGuards(RoleGuard)
  @UsePipes(new EmailPipe())
  @Role(UserRole.admin, UserRole.user)
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query(PaginationPipe) userPagination: UserPagination) {
    return { userPagination };
    // return this.usersService.findAll();
  }

  @Get('/tests/:name')
  testName(@Param('name', NamePipe) name: string) {
    return name;
  }

  @Get(':id')
  @UseGuards(AuthTokenGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
