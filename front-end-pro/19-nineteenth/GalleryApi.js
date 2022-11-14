class GalleryApi {

    static getAlbum(url) {
        return fetch(url)
        .then(res => { 
            if (res.ok) {
            return res.json()
            }

            throw new Error('Can not retrieve Album list from server')
        })
    }
}