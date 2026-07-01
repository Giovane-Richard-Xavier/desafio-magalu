import { $Enums } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChannelDto {
    @IsNotEmpty()
    @IsString()
    description!: $Enums.EnumChanel;
}
