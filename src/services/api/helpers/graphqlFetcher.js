const defaultOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}

export default function createGraphqlFetcher(
  fetch,
  url,
  options = defaultOptions
) {
  return function fetchGraphql(query, variables = {}) {
    const optionsWithQuery = {
      ...options,
      body: JSON.stringify({ query, variables }),
    }

    return fetch(url, optionsWithQuery)
  }
}
