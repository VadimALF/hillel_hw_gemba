class ContactsApi {
    static URL = 'https://62054479161670001741b708.mockapi.io/api/contacts'

  static getList() {
    return fetch(ContactsApi.URL)
      .then(res => { 
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not retrieve Contacts list from server')
      })
  }

  static create(contacts) {
    return fetch(ContactsApi.URL, {
      method: 'POST',
      body: JSON.stringify(contacts),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not create Contacts on server')
      })
  }

  static update(id, changes) {
    return fetch(`${ContactsApi.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not update Contacts on server')
      })
  }

  static delete(id) {
    return fetch(`${ContactsApi.URL}/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not delete Contacts on server')
      })
  }
}
