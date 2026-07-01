import { Notification } from "@prisma/client";

export class NotificationEntity implements Notification {
    id!: string;
    dateTime!: Date;
    destination!: string;
    message!: string;
    channelId!: number;
    statusId!: number;
}
