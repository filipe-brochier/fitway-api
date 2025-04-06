import { prisma } from '@/lib/prisma'
import { Prisma, Reward } from '@prisma/client'
import { RewardsRepository } from '../rewards-repository'

export class PrismaRewardsRepository implements RewardsRepository {
  async create(data: Prisma.RewardUncheckedCreateInput): Promise<Reward> {
    const reward = await prisma.reward.create({
      data,
    })

    return reward
  }

  async findManyByUserId(userId: string): Promise<Reward[]> {
    const rewards = await prisma.reward.findMany({
      where: {
        user_id: userId,
      },
    })

    return rewards
  }
}
