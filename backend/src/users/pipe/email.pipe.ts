/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, Logger, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class EmailPipe implements PipeTransform {
  private logger: Logger = new Logger(EmailPipe.name);

  transform(dto: CreateUserDto) {
    const isEmail = dto?.email === 'koko@gmail.com'; // TODO connet with db
    if (!isEmail) throw new ConflictException('email must be koko');
    this.logger.log({ dto })
    return { ...dto, name: dto?.name.toUpperCase() };
  }
}
