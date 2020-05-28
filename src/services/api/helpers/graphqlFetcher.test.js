import createGraphqlFetcher from './graphqlFetcher'

const mockUrl = 'https://mock.url.com/graphql'
const mockFetch = jest.fn()

describe('graphqlFetcher factory', () => {
  const graphqlFetcher = createGraphqlFetcher(mockFetch, mockUrl)

  it('should create a graphqlFetcher', () => {
    expect(graphqlFetcher).toBeInstanceOf(Function)
  })
  it('should create correct options', () => {
    const query = 'query'
    const variables = { foo: 1, bar: 'a' }
    const expectedOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables,
      }),
    }

    graphqlFetcher(query, variables)

    expect(mockFetch).toHaveBeenCalledWith(mockUrl, expectedOptions)
  })
})
