import { Prisma, Reward } from '@prisma/client'

export interface RewardsRepository {
  create(data: Prisma.RewardUncheckedCreateInput): Promise<Reward>
  findManyByUserId(userId: string): Promise<Reward[]>
}
