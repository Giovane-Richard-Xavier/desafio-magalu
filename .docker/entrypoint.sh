#!/bin/sh

echo "Generating Prisma Client..."
npx prisma generate

echo "Syncing database (DEV MODE)..."
npx prisma db push

echo "Starting NestJS..."
npm run start:dev