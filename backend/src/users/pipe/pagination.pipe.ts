/* eslint-disable prettier/prettier */
import { Injectable, PipeTransform } from '@nestjs/common';
import { UserPagination, UserQuery } from '../types/users.types';

@Injectable()
export class PaginationPipe implements PipeTransform {

  constructor() { };

  transform(value: UserQuery): UserPagination {
    const currentpage = Number(value?.page) || 1;
    const limit = Number(value?.limit) || 10;
    const skip = (currentpage - 1) * limit;
    const name = value?.name || '';
    return { currentpage, limit, skip, name } as UserPagination;
  }
}
