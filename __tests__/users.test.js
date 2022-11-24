import Users from '../src/users'
import axios from 'axios'
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
jest.mock('axios')


describe('Users', () => {

  beforeEach(() => {
    axios.mockClear()
  })

  const fakeResponse = [{name: 'John Doe'}]

  // it ('should return all user', async () => {
  //   return getAllUsers().then(result => {
  //     expect(result).toEqual([
  //       {
  //         id: 1,
  //         name: "Leanne Graham",
  //         username: "Bret",
  //         email: "Sincere@april.biz",
  //         address: {
  //           street: "Kulas Light",
  //           suite: "Apt. 556",
  //           city: "Gwenborough",
  //           zipcode: "92998-3874",
  //           geo: {
  //             lat: "-37.3159",
  //             lng: "81.1496"
  //           }
  //         },
  //         phone: "1-770-736-8031 x56442",
  //         website: "hildegard.org",
  //         company: {
  //           name: "Romaguera-Crona",
  //           catchPhrase: "Multi-layered client-server neural-net",
  //           bs: "harness real-time e-markets"
  //         }
  //       }
  //     ])
  //   })
  // })

  it ('should return last user', async () => {
    axios.get.mockResolvedValue({data: fakeResponse })
    expect(await Users.getLastUserName()).toBe('John Doe')
  })

  it ('should return last user whith fetch', async () => {
    fetch.mockResponseOnce(JSON.stringify(fakeResponse))
    const test =  await Users.getLastUserNameFetch()
    expect(test).toBe('John Doe')
    
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    // const result = await res.json();
    // expect(result.name).toBe('Leanne Graham');  // Success!
  })

})