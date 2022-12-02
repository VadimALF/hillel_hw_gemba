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
          alert(stiker)
          StickersApi.createSticker(stiker)
              
            .then(stickers => getStickers(stickers))

            .catch(showError)
          this.clear()
        },
        Cancel: function () {
          this.clear()
        },
        Close: function () {
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