import { expect, it, vi } from 'vitest'
import { getUNIXTime } from '../src/index'

// petit test unitaire
it('gets unix timestamp', () => {
  // ? On fige le temps system
  vi.setSystemTime('2020-01-01')
  expect(getUNIXTime()).toStrictEqual(1577836800)
  // ? On restaure le temps
  vi.useRealTimers()
})
