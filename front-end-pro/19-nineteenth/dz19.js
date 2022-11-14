'use strict'

const GALLERY = '#gallery'
const ALBUMS_LIST = '#albumsList'
const ALBUM_PHOTOS = '#albumPhotos'
const URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums'
const URL_ALBUM_ID = 'https://jsonplaceholder.typicode.com/photos?albumId='
let albumId = '1'

const gallery = document.querySelector(GALLERY)
const albumsList = document.querySelector(ALBUMS_LIST)
const albumPhotos = document.querySelector(ALBUM_PHOTOS)

gallery.addEventListener('click', onGalleryClick)

getGallery()
getAlbum()

function onGalleryClick(e) {
    userChoose(e.target)  
}

function userChoose(el) {
    if (el.classList.contains('album')) {
        albumId = el.dataset.id
        getAlbum()
    }
}

function getGallery() {
    GalleryApi.getAlbum(URL_ALBUMS)
        .then(album => renderGallery(album))

        .catch(showError)
}

function renderGallery(galleryList) {
    const html = galleryList.map(generateGalleryItemHTML).join('')
    albumsList.innerHTML = html
}

function generateGalleryItemHTML(albums) {
    return `<li class="album" data-id="${albums.id}">${albums.title}</li>`
}

function showError(error) {
  alert(error.message);
}

function getAlbum() {
    GalleryApi.getAlbum(`${URL_ALBUM_ID}${albumId}`)
        .then(element => renderAlbum(element))

        .catch(showError)
}

function renderAlbum(albumList) {
    const html = albumList.map(generateAlbumItemHTML).join('')
    albumPhotos.innerHTML = html
}

function generateAlbumItemHTML(element) {
    return `<img src="${element.thumbnailUrl}"
     alt="${element.title}"
     title="${element.title}" 
     class="thumbnailUrl"
     data-id="${element.id}"/>`
}