import axios from 'axios'
import qs from 'qs'

const configPath = ''
export const Utils = {
  getAxiosConfig () {
    return {
      headers: {
        'version': '',
        'sessionid': '',
        'device': ''
      },
      timeout: 1000,
      response: 'json'
    }
  },
  get (params, url) {
    url = configPath + url
    let config = this.getAxiosConfig()
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params }, config)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (response) {
          console.log(response)
          console.log('接口异常')
        })
    })
  },
  post (params, url) {
    url = configPath + url
    let config = this.getAxiosConfig()
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params), config)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (response) {
          console.log(response)
          console.log('接口异常')
        })
    })
  }
}
