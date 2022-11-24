import {ping} from '../src/discord'


describe('Discord',  () => {

  it('should dm the user', async () => {
    // const mock = jest.fn().mockReturnValue(4)
    // const mock = jest.fn().mockReturnValueOnce(4).mockReturnValueOnce(2).mockReturnValueOnce(1)
    // console.log(mock());
    // console.log(mock());
    const channelMock = {
      send: jest.fn()
    }
    const createDMMock = jest.fn().mockResolvedValueOnce(channelMock)
    const message = {
      delete: jest.fn().mockResolvedValue({}),
      reply: jest.fn(),
      author: {createDM: createDMMock}
    }
    await ping(message)
    expect(message.delete).toHaveBeenCalled()
    expect(channelMock.send).toHaveBeenCalledWith('pong')
  })

})