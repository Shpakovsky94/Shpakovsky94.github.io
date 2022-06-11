import axios from 'axios'

const apiEstates = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {

  getList () {
    return apiEstates.get()
  },
  async handleClickGetAuthCode(authCode){
    try {
      if (authCode) {
        const response = await axios.get('https://api.estonia-for-ukraine.com/Callback', {
          params: {
            code: authCode
          }
        });
        console.log("handleClickGetAuthCode", response.data);
      }
    } catch(error) {
      //on fail do something
      console.error(error);
      return null;
    }
  },
}
