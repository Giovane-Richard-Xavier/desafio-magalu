import { NotificationStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateStatusDto {
  @IsNotEmpty()
  @IsEnum(NotificationStatus)
  description!: NotificationStatus;
}
