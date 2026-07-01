import { $Enums } from "@prisma/client";

export class CreateStatusDto {
    description!: $Enums.EnumStatus;
}
