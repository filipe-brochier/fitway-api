/*
  Warnings:

  - You are about to drop the column `earnedAt` on the `rewards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "rewards" DROP COLUMN "earnedAt",
ADD COLUMN     "earned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
