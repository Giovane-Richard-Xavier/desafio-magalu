import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';

@Module({
  controllers: [ChannelController],
  providers: [ChannelService],
  exports: [ChannelModule]
})
export class ChannelModule {}
