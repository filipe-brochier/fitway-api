import { CreateGymUseCase } from './create-gym'
import { expect, it, describe, beforeEach, vi } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
// import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

let gymsRepository: InMemoryGymsRepository
// let checkInsRepository: InMemoryCheckInsRepository
let sut: CreateGymUseCase

describe('Register Use Case', async () => {
  beforeEach(async () => {
    // checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)

    await gymsRepository.create({
      id: 'gym-01',
      title: 'Gym 01',
      description: '',
      phone: '',
      latitude: -23.5505,
      longitude: -46.6333,
    })

    vi.useFakeTimers()
  })

  it('should be able to create a gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym Example',
      description: '',
      phone: '',
      latitude: -23.1234,
      longitude: -43.1234,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
