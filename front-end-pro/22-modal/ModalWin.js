class ModalWin {
  #dialog;

  constructor(modalElSelector) {
    this.#dialog = $(modalElSelector).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        "Save": () => {
          const stiker = { description: $description[FIRST_FORM].value }
          StickersApi.createSticker(stiker)
            .then(stickers => getStickers(stickers))

            .catch(showError)
          this.clear()
        },
        Cancel: () => {
          this.clear()
        },
        Close: () => {
          this.clear()
        }
      }
    })

  }

  open() {
    this.#dialog.dialog( "open" )
  }
  
  clear() {
  $descriptionForm[FIRST_FORM].reset()
  this.#dialog.dialog( "close" )
  }
}