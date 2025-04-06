import { Prisma, Reward } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { RewardsRepository } from '../rewards-repository'

export class InMemoryRewardsRepository implements RewardsRepository {
  public items: Reward[] = []

  async create(data: Prisma.RewardUncheckedCreateInput): Promise<Reward> {
    const reward = {
      id: randomUUID(),
      user_id: data.user_id,
      type: data.type,
      earned_at: new Date(),
    }

    this.items.push(reward)

    return reward
  }

  async findManyByUserId(userId: string): Promise<Reward[]> {
    const rewards = this.items.filter((item) => item.user_id === userId)

    return rewards
  }
}
