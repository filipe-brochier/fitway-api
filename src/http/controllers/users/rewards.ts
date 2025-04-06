import { makeFetchUserRewardsUseCase } from '@/use-cases/factories/make-fetch-user-rewards-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function rewards(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify()

  const fetchUserRewards = makeFetchUserRewardsUseCase()

  const { rewards } = await fetchUserRewards.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({ rewards })
}
