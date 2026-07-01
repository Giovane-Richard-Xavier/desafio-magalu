import { ChannelType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dateTime!: Date;

  @IsNotEmpty()
  @IsString()
  destination!: string;

  @IsNotEmpty()
  @IsString()
  message!: string;

  @IsNotEmpty()
  @IsEnum(ChannelType)
  channel!: ChannelType;
}
