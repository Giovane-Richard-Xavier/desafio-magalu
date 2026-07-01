import { Injectable, NotFoundException } from '@nestjs/common';
import { NotificationStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  // Agenda uma nova notificação
  async scheduleNotification(dto: CreateNotificationDto) {
    // // Encontrar o Channel pelo description
    // const channel = await this.prisma.channel.findUnique({
    //   where: { description: dto.channel },
    // });

    // if (!channel) {
    //   throw new NotFoundException(`Channel ${dto.channel}, not found`);
    // }

    // // Pegar o Status PENDING
    // const status = await this.prisma.status.findUnique({
    //   where: { description: NotificationStatus.PENDING },
    // });

    // if (!status) {
    //   throw new NotFoundException('Status PENDING not found.');
    // }

    const notification = await this.prisma.notification.create({
      data: {
        dateTime: dto.dateTime,
        destination: dto.destination,
        message: dto.message,

        channel: {
          connect: {
            description: dto.channel,
          },
        },

        status: {
          connect: {
            description: NotificationStatus.PENDING,
          },
        },
      },
      include: {
        channel: true,
        status: true,
      },
    });

    return notification;
  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
