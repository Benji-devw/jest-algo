import axios from 'axios'

export default {

   getAllUsers() {
    let users = axios.get('https://jsonplaceholder.typicode.com/users')
    return users[0]
  },

  async getLastUserName() {
    let users = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log('>>>>>>>>', users);
    return users.data[0].name
  },

  async getLastUserNameFetch() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
    return users[0].name
  }
  
}

