import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
  You'll need to add to this class as you build features for the app.
*/

class YodlrApi {

  static async getUsers() {
    const result = await axios.get(`${BASE_API_URL}/users`);
    return result.data;
  }
  static async getUser(id) {
    const result = await axios.get(`${BASE_API_URL}/users/${id}`);
    return result.data;
  }
  static async addUser(info) {
    const result = await axios({
      method: 'post',
      url: `${BASE_API_URL}/users`,
      data: { ...info }
    });
    return result.data;
  }
}

export default YodlrApi;