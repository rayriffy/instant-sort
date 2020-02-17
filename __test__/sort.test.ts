import { sort } from '../src'

it('should pass if not passing any types', () => {
  const res = sort([1, 2, 3, 4])

  expect(res).toStrictEqual([])
})

it('should pass if passing normal types', () => {
  const res = sort<string>(['yeet', 'yeeten'])

  expect(res).toStrictEqual([])
})

it('should pass if passing advanced interfaces', () => {
  interface IAnime {
    name: {
      romaji: string
      english: string
      native: string
    }
    genres: string[]
  }

  const res = sort<Omit<IAnime, 'genres'>>([
    {
      name : {
        romaji: 'Toaru Kagaku no Railgun T',
        english: 'A Certain Scientific Railgun T',
        native: 'とある科学の超電磁砲T',
      },
    },
    {
      name : {
        romaji: 'Itai no wa Iya nanode Bougyo-Ryoku ni Kyokufuri Shitai to Omoimasu',
        english: `BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.`,
        native: '痛いのは嫌なので防御力に極振りしたいと思います。'
      },
    },
  ])

  expect(res).toStrictEqual([])
})
