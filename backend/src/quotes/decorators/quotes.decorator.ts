/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';


export const QUOTE_KEY = 'quote-decorator'

export const QuoteDecorator = (...args: string[]) => SetMetadata(QUOTE_KEY, args);
