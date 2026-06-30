import { $Enums, Channel } from "@prisma/client";

export class ChannelEntity implements Channel {
    id!: number;
    description!: $Enums.EnumChanel;
}
