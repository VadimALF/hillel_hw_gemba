'use strict'

const GALLERY = '#gallery'
const ALBUMS_LIST = '#albumsList'
const ALBUM_PHOTOS = '#albumPhotos'
const START_ALBUM = 0
let i = 0
let albumId


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
        albumId = el.dataset.id
        getAlbum()
    }
}

function getGallery() {
    GalleryApi.getAlbumsList()
        .then(album => renderGallery(album))

        .catch(showError)
}

function renderGallery(galleryList) {
    
    const html = galleryList.map(generateGalleryItemHTML).join('')
    albumsList.innerHTML = html
    getAlbum()
}

function generateGalleryItemHTML(albums) {
    if (albums.id) {
        if (i === START_ALBUM) {
            albumId = findFirstAlbum(albums)
        }
        i++
        return `<li class="album" data-id="${albums.id}">${albums.title}</li>`
    }
}

function findFirstAlbum(album) {
    return album.id
}

function showError(error) {
  alert(error.message);
}

function getAlbum() {
    GalleryApi.getAlbum(albumId)
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