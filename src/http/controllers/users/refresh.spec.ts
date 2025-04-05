import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, afterAll, beforeAll } from 'vitest'

describe('Refresh Token (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to refresh a token', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    }

    const JWT_TOKEN_REGEX = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/s

    await request(app.server).post('/users').send(user)

    const authResponse = await request(app.server).post('/sessions').send({
      email: user.email,
      password: user.password,
    })

    const cookies = authResponse.get('Set-Cookie')

    const response = await request(app.server)
      .patch('/token/refresh')
      .set('Cookie', cookies!)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.token).toMatch(JWT_TOKEN_REGEX)
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken='),
    ])
  })
})
