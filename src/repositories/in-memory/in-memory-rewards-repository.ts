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

  async findByUserId(userId: string): Promise<Reward | null> {
    const reward = await this.items.find((item) => item.user_id === userId)

    if (!reward) {
      return null
    }

    return reward
  }
}
