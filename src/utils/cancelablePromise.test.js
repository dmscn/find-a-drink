import createCancelablePromise from './cancelablePromise'

const mockResponse = 'DONE'

const mockPromise = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(mockResponse)
    }, 300)
  })

describe('CancelablePromise helper function', () => {
  const cancelablePromise = createCancelablePromise()

  it('should export the cancel method', () => {
    expect(cancelablePromise.cancel).toBeInstanceOf(Function)
  })

  it('should resolve the promise', async () => {
    const promise2 = cancelablePromise(mockPromise())
    await expect(promise2).resolves.toEqual(mockResponse)
  })

  it('should cancel the promise', async () => {
    const promise = cancelablePromise(mockPromise())
    cancelablePromise.cancel()
    await expect(promise).rejects.toEqual('Promise canceled')
  })
})
