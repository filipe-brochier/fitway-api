import { FetchUserRewardsUseCase } from '../fetch-user-rewards'
import { PrismaRewardsRepository } from '@/repositories/prisma/prisma-rewards-repository'

export function makeFetchUserRewardsUseCase(): FetchUserRewardsUseCase {
  const userRepository = new PrismaRewardsRepository()
  const useCase = new FetchUserRewardsUseCase(userRepository)

  return useCase
}
