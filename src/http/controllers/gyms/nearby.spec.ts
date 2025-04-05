import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, afterAll, beforeAll } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

const IS_ADMIN = true

describe('Search Nearby Gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to list nearby gyms', async () => {
    const { token } = await createAndAuthenticateUser(app, IS_ADMIN)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Gym Name',
        description: 'Gym Description',
        phone: '11999999999',
        latitude: -23.5505,
        longitude: -46.6333,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Gym 2 Name',
        description: 'Gym 2 Description',
        phone: '113499999999',
        latitude: -23.1005,
        longitude: -46.1333,
      })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -23.5504,
        longitude: -46.6332,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)

    expect(response.body.gyms).toHaveLength(1)

    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Gym Name',
      }),
    ])
  })
})
