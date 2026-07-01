import { ChannelType } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateChannelDto {
  @IsNotEmpty()
  @IsEnum(ChannelType)
  description!: ChannelType;
}
