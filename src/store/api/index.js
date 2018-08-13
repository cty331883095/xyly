import { Utils } from './Utils.js'
export function getScenicTotal (params) {
  return new Promise((resolve, reject) => {
    const url = ''
    Utils.get(params, url)
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        resolve(res)
      })
  })
}
