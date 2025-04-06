import request from 'supertest'
import { prisma } from '@/lib/prisma'
import { app } from '@/app'
import { describe, it, expect, afterAll, beforeAll } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Rewards (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user rewards', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const user = await prisma.user.findFirstOrThrow()

    await prisma.reward.createMany({
      data: [
        {
          user_id: user.id,
          type: 'TOTAL_FOCUS',
        },
        {
          user_id: user.id,
          type: 'UNSTOPPABLE',
        },
      ],
    })

    const response = await request(app.server)
      .get('/me/rewards')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.rewards).toEqual([
      expect.objectContaining({
        type: 'TOTAL_FOCUS',
        user_id: user.id,
      }),
      expect.objectContaining({
        type: 'UNSTOPPABLE',
        user_id: user.id,
      }),
    ])
  })
})
