class StickersApi {
  static URL = 'https://62054479161670001741b708.mockapi.io/api/stickers'

  static request(url = '', method = 'GET', body) {
    return fetch(StickersApi.URL + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(response => {
        if (response.ok) {
        return response.json();
        }

        throw new Error('Canot execute request method', { cause: response })
      })
  }

  static getList() {
    return StickersApi.request('').catch((error) => {
      throw new Error('Can not retrieve contact list from server', )
    })
  }

  static createSticker(sticker) {
    return StickersApi.request('', 'POST', sticker).catch((error) => {
      throw new Error('Can not create sticker on server')
    })
  }

  static updateSticker(id, changes) {
    return StickersApi.request(id, 'PUT', changes).catch((error) => {
      throw new Error('Can not update sticker on server')
    })
  }

  static deleteSticker(id) {
    return StickersApi.request(id, 'DELETE').catch((error) => {
      throw new Error('Can not delete sticker on server')
    })
  } 
}