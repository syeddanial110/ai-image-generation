import axios from 'axios'

export const BASEURL = 'https://stopnchop-dev.herokuapp.com'

export const apiBaseUrl = `${BASEURL}`

export function getCommonHeaders(h) {
  var headers = {
    // 'Content-Type': 'application/json',
    'x-api-key': 'SG_0eddaa02fce10569',
  }
  return headers
}

export function apiPost(endpoint, body, onSuccess, onFailure, headers) {
  axios
    .post(endpoint, body, {
      headers: getCommonHeaders(headers),
    }, { responseType: "arraybuffer" } )
    .then((response) => {
      onSuccess(response)
    })
    .catch((error) => {
      onFailure(error)
    })
}
