import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsDateString()
  dateTime!: string;

  @IsNotEmpty()
  @IsString()
  destination!: string;

  @IsNotEmpty()
  @IsString()
  message!: string;

  @IsNotEmpty()
  @IsNumber()
  channelId!: number;

  @IsNotEmpty()
  @IsNumber()
  statusId!: number;
}
