class GalleryApi {

    static URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums'
    static URL_ALBUM_ID = 'https://jsonplaceholder.typicode.com/photos?albumId='


    static getAlbumsList() {
        return fetch(GalleryApi.URL_ALBUMS)
        .then(res => { 
            if (res.ok) {
            return res.json()
            }

            throw new Error('Can not get list of albums from server')
        })
    }
    static getAlbum(albumId) {
        return fetch(`${GalleryApi.URL_ALBUM_ID}${albumId}`)
        .then(res => { 
            if (res.ok) {
            return res.json()
            }

            throw new Error('Unable to get album thumbnail list from server')
        })
    }    
}