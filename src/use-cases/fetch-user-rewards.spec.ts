import { expect, it, describe, beforeEach } from 'vitest'

import { FetchUserRewardsUseCase } from './fetch-user-rewards'
import { InMemoryRewardsRepository } from '@/repositories/in-memory/in-memory-rewards-repository'

let rewardsRepository: InMemoryRewardsRepository
let sut: FetchUserRewardsUseCase

describe('Fetch User Rewards Use Case', async () => {
  beforeEach(() => {
    rewardsRepository = new InMemoryRewardsRepository()
    sut = new FetchUserRewardsUseCase(rewardsRepository)
  })

  it('should be able to fetch user rewards', async () => {
    await rewardsRepository.create({
      user_id: 'user-1',
      type: 'TOTAL_FOCUS',
    })

    await rewardsRepository.create({
      user_id: 'user-1',
      type: 'UNSTOPPABLE',
    })

    const { rewards } = await sut.execute({
      userId: 'user-1',
    })

    expect(rewards).toHaveLength(2)
    expect(rewards).toEqual([
      expect.objectContaining({
        type: 'TOTAL_FOCUS',
      }),
      expect.objectContaining({
        type: 'UNSTOPPABLE',
      }),
    ])
  })
})
