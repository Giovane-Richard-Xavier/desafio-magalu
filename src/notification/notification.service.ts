import { Injectable, NotFoundException } from '@nestjs/common';
import { NotificationStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ParamsPaginationDto } from './dto/params-pagnations.dto';
import { buildPaginationMeta } from 'src/utils/functions/build-pagination-meta';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  // Agenda uma nova notificação
  async scheduleNotification(dto: CreateNotificationDto) {
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

  async findAllNotifications(params: ParamsPaginationDto) {
    const { page = 1, limit: itemsPerPage = 10, sort } = params;

    const skip = (page - 1) * itemsPerPage;

    const [total, notifications] = await this.prisma.$transaction([
      this.prisma.notification.count(),
      this.prisma.notification.findMany({
        skip,
        take: itemsPerPage,
        orderBy: { createdAt: sort },
        include: {
          channel: true,
          status: true,
        },
      }),
    ]);

    const meta = buildPaginationMeta(
      total,
      page,
      itemsPerPage,
      notifications.length,
    );

    return {
      notifications,
      meta,
    };
  }

  async findNotificationById(id: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
      include: {
        channel: true,
        status: true,
      },
    });

    if (!notification) {
      throw new NotFoundException(`Notification ID: ${id} not found.`);
    }

    return notification;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
