class ModalWin {
  static INPUT_SELECTOR = 'input, textarea';

  #dialog;
  #$inputs;

  constructor(modalElSelector, saveData) {
    this.#$inputs = $(ModalWin.INPUT_SELECTOR);
    this.#dialog = $("#dialog-form").dialog({
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

  clear() {
  $descriptionForm[FIRST_FORM].reset()
  this.#dialog.dialog( "close" )
}
}