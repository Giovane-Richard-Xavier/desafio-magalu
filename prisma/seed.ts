import { PrismaClient, ChannelType, NotificationStatus } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Popula canais fixos
  await prisma.channel.upsert({
    where: { description: ChannelType.EMAIL },
    update: {},
    create: { description: ChannelType.EMAIL },
  });
  await prisma.channel.upsert({
    where: { description: ChannelType.SMS },
    update: {},
    create: { description: ChannelType.SMS },
  });
  await prisma.channel.upsert({
    where: { description: ChannelType.PUSH },
    update: {},
    create: { description: ChannelType.PUSH },
  });
  await prisma.channel.upsert({
    where: { description: ChannelType.WHATSAPP },
    update: {},
    create: { description: ChannelType.WHATSAPP },
  });

  // Popula status fixos
  await prisma.status.upsert({
    where: { description: NotificationStatus.PENDING },
    update: {},
    create: { description: NotificationStatus.PENDING },
  });
  await prisma.status.upsert({
    where: { description: NotificationStatus.SUCCESS },
    update: {},
    create: { description: NotificationStatus.SUCCESS },
  });
  await prisma.status.upsert({
    where: { description: NotificationStatus.ERROR },
    update: {},
    create: { description: NotificationStatus.ERROR },
  });
  await prisma.status.upsert({
    where: { description: NotificationStatus.CANCELED },
    update: {},
    create: { description: NotificationStatus.CANCELED },
  });
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
