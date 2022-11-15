class GalleryApi {

    static URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums'
    static URL_ALBUM_ID = 'https://jsonplaceholder.typicode.com/photos?albumId='


    static getAlbumList(url) {
        return fetch(url)
        .then(res => { 
            if (res.ok) {
            return res.json()
            }

            throw new Error('Can not get Album list from server')
        })
    }
}