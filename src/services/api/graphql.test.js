import GraphqlService from './graphql'
import graphqlFetcherCreator from './helpers/graphqlFetcher'

jest.mock('./helpers/graphqlFetcher.js', () => jest.fn())

const mockGraphqlFetcher = jest.fn()
graphqlFetcherCreator.mockImplementation(() => mockGraphqlFetcher)

beforeAll(() => {
  global.Date = jest.fn(() => ({
    toISOString: () => 1,
  }))
})

describe('Graphql Service', () => {
  describe('getPocs', () => {
    it('creates the correct variables', () => {
      const expectedVariables = {
        algorithm: 'NEAREST',
        lat: '-23.632919',
        long: '-46.699453',
        now: new Date().toISOString(),
      }
      GraphqlService.getPocs()
      expect(mockGraphqlFetcher).toHaveBeenCalledWith(
        expect.anything(),
        expectedVariables
      )
    })
  })

  describe('getProducts', () => {
    it('should pass the correct query and variables to graphqlFetcher', () => {
      const mockId = 42
      const expectedVariables = {
        id: mockId,
        search: '',
        categoryId: null,
      }
      GraphqlService.getProducts(mockId)
      expect(mockGraphqlFetcher).toHaveBeenCalledWith(
        expect.anything(),
        expectedVariables
      )
    })
  })
})
