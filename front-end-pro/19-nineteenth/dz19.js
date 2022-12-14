'use strict'

const GALLERY = '#gallery'
const ALBUMS_LIST = '#albumsList'
const ALBUM_PHOTOS = '#albumPhotos'
const START_ALBUM = 0

const gallery = document.querySelector(GALLERY)
const albumsList = document.querySelector(ALBUMS_LIST)
const albumPhotos = document.querySelector(ALBUM_PHOTOS)

gallery.addEventListener('click', onGalleryClick)

getGallery()

function onGalleryClick(e) {
    userChoose(e.target)  
}

function userChoose(el) {
    if (el.classList.contains('album')) {
        getAlbum(el.dataset.id)
    }
}

function getGallery() {
    GalleryApi.getAlbumList(GalleryApi.URL_ALBUMS)
        .then(album => renderGallery(album))

        .catch(showError)
}

function renderGallery(galleryList) {
    const html = galleryList.map(generateGalleryItemHTML).join('')
    albumsList.innerHTML = html
    getAlbum(galleryList[START_ALBUM].id)
}

function generateGalleryItemHTML(albums) {
        return `<li class="album" data-id="${albums.id}">${albums.title}</li>`
}

function showError(error) {
  alert(error.message);
}

function getAlbum(id) {
    GalleryApi.getAlbumList(`${GalleryApi.URL_ALBUM_ID}${id}`)
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