import { Reward } from '@prisma/client'
import { RewardsRepository } from '@/repositories/rewards-repository'

interface FetchUserRewardsUseCaseRequest {
  userId: string
}

interface FetchUserRewardsUseCaseResponse {
  rewards: Reward[]
}

export class FetchUserRewardsUseCase {
  constructor(private rewardsRepository: RewardsRepository) {}

  async execute({
    userId,
  }: FetchUserRewardsUseCaseRequest): Promise<FetchUserRewardsUseCaseResponse> {
    const rewards = await this.rewardsRepository.findManyByUserId(userId)

    return { rewards }
  }
}
