import promisifyActionDispatch from './promisifyActionDispatch'

const mockActionResponse = 'DONE'

const mockDispatch = jest.fn(({ resolve }) => resolve(mockActionResponse))

const mockAction = {
  type: 'MOCK_ACTION',
}

describe('promisifyActionDispatch util function', () => {
  it('should return a promise', () => {
    expect(promisifyActionDispatch(mockDispatch)).toBeInstanceOf(Promise)
  })

  it('should dispatch the action', async () => {
    const expectedDispatchValues = {
      type: mockAction.type,
      resolve: expect.any(Function),
      reject: expect.any(Function),
    }
    await promisifyActionDispatch(mockDispatch, mockAction)
    expect(mockDispatch).toHaveBeenCalledWith(expectedDispatchValues)
  })
})
