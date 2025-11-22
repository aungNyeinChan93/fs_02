/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';


export const TEST_DECORATOR = 'test-decorator'

export const TestDecorator = (...args: string[]) => SetMetadata(TEST_DECORATOR, args);
