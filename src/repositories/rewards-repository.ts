import { Prisma, Reward } from '@prisma/client'

export interface RewardsRepository {
  create(data: Prisma.RewardUncheckedCreateInput): Promise<Reward>
  findByUserId(userId: string): Promise<Reward | null>
}
