-- CreateEnum
CREATE TYPE "RewardType" AS ENUM ('TOTAL_FOCUS', 'UNSTOPPABLE');

-- CreateTable
CREATE TABLE "rewards" (
    "id" TEXT NOT NULL,
    "type" "RewardType" NOT NULL,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rewards_user_id_type_key" ON "rewards"("user_id", "type");

-- AddForeignKey
ALTER TABLE "rewards" ADD CONSTRAINT "rewards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
