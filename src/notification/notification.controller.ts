import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ParamsPaginationDto } from './dto/params-pagnations.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  // Agenda nova notificação
  scheduleNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.scheduleNotification(createNotificationDto);
  }

  @Get()
  findAllNotifications(@Query() params: ParamsPaginationDto) {
    return this.notificationService.findAllNotifications(params);
  }

  @Get(':id')
  findNotificationById(@Param('id') id: string) {
    return this.notificationService.findNotificationById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
