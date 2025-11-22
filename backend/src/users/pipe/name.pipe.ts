/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Injectable, NotAcceptableException, PipeTransform } from '@nestjs/common';

@Injectable()
export class NamePipe implements PipeTransform {
  transform(value: string) {
    const isAungAung = value === 'aung';
    if (!isAungAung) throw new NotAcceptableException('User is not aung aung')
    return value;
  }
}
