import { expect, it, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', async () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch for nearby gyms', async () => {
    await gymsRepository.create({
      id: 'gym-01',
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -23.5505,
      longitude: -46.6333,
    })

    await gymsRepository.create({
      id: 'gym-02',
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -27.0610928,
      longitude: -49.641091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.5602,
      userLongitude: -46.6431,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Near Gym',
      }),
    ])
  })
})
