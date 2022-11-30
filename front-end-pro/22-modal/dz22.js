'use strict'

const BOARD_SELECTOR = '#board'
const ADD_BTN = '#addBtn'
const DEL_BTN_CLASS = '.delBtn'
const STICKER_DESCR_CLASS = '.stickerDescription'
const STICKER_SELECTOR = '.stickerItem'
const STICKERS_CONTAINER = '#stickersContainer'
const DESCRIPTION_FORM = '#descriptionForm'
const DESCRIPTION = '#description'
const FIRST_FORM = 0
const EMPTY_NOTE = {
  description: '',
}

const $stickersBoard = $(BOARD_SELECTOR)
const $addBtn = $(ADD_BTN)
const $stickerDel = $(DEL_BTN_CLASS)
const $editSticker = $(STICKER_DESCR_CLASS)
const $stickersContainer = $(STICKERS_CONTAINER)
const $descriptionForm = $(DESCRIPTION_FORM)
const $description = $(DESCRIPTION)

const dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
          "Save": () => {
            const stiker = { description: $description[FIRST_FORM].value }
            alert (stiker)
            StickersApi.createSticker(stiker)
              
              .then(stickers => getStickers(stickers))

              .catch(showError)
            clear()
          },
          Cancel: function () {
            clear()
          },
          Close: function () {
            clear()
          }
        }
      })

$stickersBoard
    .on('click', ADD_BTN, onAddBtnClick)
    .on('click', DEL_BTN_CLASS, onDelBtnClick)
    .on('focusout', STICKER_DESCR_CLASS, onDescriptionClick)

getStickers()

function onAddBtnClick(e) {
    dialog.dialog("open")
}

function onDelBtnClick(e) {
    const stickerId = '/' + getStickerId(e.target)
    
    StickersApi.deleteSticker(stickerId)
        .then(stickers => getStickers(stickers))

        .catch(showError)
}

function onDescriptionClick(e) {
    const change = {
        id: '/' + getStickerId(e.target),
        description: e.target.value
    }

    StickersApi.updateSticker(change.id, change)
        .then(stickers => getStickers(stickers))

        .catch(showError)
}

function getStickers() {
    StickersApi.getList()
        .then(stickers => renderStickersContainer(stickers))

        .catch(showError)
}

function renderStickersContainer(stickers) {
    $stickersContainer.html(stickers.map(generateStickerItemHTML))
}

function generateStickerItemHTML(sticker) {
    return `
        <div class="stickerItem" data-id="${sticker.id}">
            <button class="delBtn"><b>X</b></button>
            <textarea class="stickerDescription" name="descr" 
                cols="20" rows="2" minlength="5" maxlength="42"
                >${sticker.description}</textarea>
        </div>
        `
}

function showError(error) {
    alert(error.message);
}

function getStickerId(el) {
    return el.closest(STICKER_SELECTOR).dataset.id
}

function clear() {
  $descriptionForm[FIRST_FORM].reset()
  dialog.dialog( "close" )
}