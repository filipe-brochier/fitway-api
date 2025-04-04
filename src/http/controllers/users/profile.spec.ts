import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, afterAll, beforeAll } from 'vitest'

describe('Profile (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user profile', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    }

    await request(app.server).post('/users').send(user)

    const authResponse = await request(app.server).post('/sessions').send({
      email: user.email,
      password: user.password,
    })

    const { token } = authResponse.body

    const response = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: user.name,
        email: user.email,
      }),
    )
    expect(response.body.user.password_hash).toBeUndefined()
  })
})
