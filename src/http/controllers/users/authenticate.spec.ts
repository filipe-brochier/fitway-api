import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, afterAll, beforeAll } from 'vitest'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    }

    const JWT_TOKEN_REGEX = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/s

    await request(app.server).post('/users').send(user)

    const response = await request(app.server).post('/sessions').send({
      email: user.email,
      password: user.password,
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body.token).toMatch(JWT_TOKEN_REGEX)
  })
})
