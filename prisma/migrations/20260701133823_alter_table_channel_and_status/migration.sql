/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `Status` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "description" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Status" ALTER COLUMN "description" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Channel_description_key" ON "Channel"("description");

-- CreateIndex
CREATE INDEX "Channel_description_idx" ON "Channel"("description");

-- CreateIndex
CREATE INDEX "Notification_statusId_dateTime_idx" ON "Notification"("statusId", "dateTime");

-- CreateIndex
CREATE UNIQUE INDEX "Status_description_key" ON "Status"("description");

-- CreateIndex
CREATE INDEX "Status_description_idx" ON "Status"("description");
