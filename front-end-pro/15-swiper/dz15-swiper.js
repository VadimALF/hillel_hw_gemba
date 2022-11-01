'use strict'

class Swiper {
  #rootEl
  #imgElements
  #swiperEl
  #imgIndex
  #buttonIndex

  static CLASS_SWIPER_ITEM = 'swiper-item'
  static CLASS_SWIPER_ITEM_IMG_OPEN = 'swiper-item-img-open'
  static CLASS_SWIPER_ITEM_IMG_CLOSE = 'swiper-item-img-close'
  static CLASS_ITEM_BUTTON_ACTIVE = 'swiper-item-button-active'
  static CLASS_ITEM_BUTTON_INACTIVE = 'swiper-item-button-inactive'

  constructor(rootEl) {
    this.#rootEl = rootEl
    this.#imgElements = Array.from(this.#rootEl.children[1].querySelectorAll('img'))
    this.#swiperEl = Array.from(this.#rootEl.children)
    this.#imgIndex = 0
    this.#buttonIndex = 0
    this.bindStyles(this.#imgElements, this.#imgIndex)
    
    this.#rootEl.addEventListener('click', e =>
      this.onButtonElClick(e))
  }

  bindStyles(imgElements, imgIndex) {
    this.#rootEl.classList.add(Swiper.CLASS_SWIPER_ITEM)
    this.#swiperEl[0].classList.add(Swiper.CLASS_ITEM_BUTTON_INACTIVE)

    if (this.isNumberOfImages(this.#imgElements)) {
      this.#swiperEl[2].classList.add(Swiper.CLASS_ITEM_BUTTON_ACTIVE)
    }
    else {
      this.#rootEl.children[2].classList.add(Swiper.CLASS_ITEM_BUTTON_INACTIVE)
    }

    for (const itemEl of imgElements) {
      itemEl.classList.add(Swiper.CLASS_SWIPER_ITEM_IMG_CLOSE)
    }

    this.openImage(imgElements, imgIndex)
  }

  openImage(imgElements, imgIndex) {
    imgElements[imgIndex].classList.remove(Swiper.CLASS_SWIPER_ITEM_IMG_CLOSE)
    imgElements[imgIndex].classList.add(Swiper.CLASS_SWIPER_ITEM_IMG_OPEN)
  }

  closeImage(imgElements, imgIndex) {
    imgElements[imgIndex].classList.remove(Swiper.CLASS_SWIPER_ITEM_IMG_OPEN)
    imgElements[imgIndex].classList.add(Swiper.CLASS_SWIPER_ITEM_IMG_CLOSE)
  }

  isNumberOfImages(el) {
    return el.length > 1
  }

  onButtonElClick(e) {
    if (e.target.classList.contains(Swiper.CLASS_ITEM_BUTTON_ACTIVE)) {
      this.#buttonIndex = this.#swiperEl.indexOf(e.target)
      this.showAction()
    }
  }

  showAction() {
    (this.#buttonIndex === 2) ? this.swipRight() : this.swipLeft()
  }

  swipRight() {
    if (this.#imgIndex === 0) {
      this.openButton(0)
    }

    this.closeImage(this.#imgElements, this.#imgIndex)
    this.#imgIndex++
    this.openImage(this.#imgElements, this.#imgIndex)

    if (this.#imgIndex === this.#imgElements.length-1) {
      this.closeButton(this.#buttonIndex)
    }
  }

  swipLeft() {
    if (this.#imgIndex === this.#imgElements.length-1) {
      this.openButton(2)
    }

    this.closeImage(this.#imgElements, this.#imgIndex)
    this.#imgIndex--
    this.openImage(this.#imgElements, this.#imgIndex)
    
    if (this.#imgIndex === 0) {
      this.closeButton(0)
    }
  }

  closeButton(buttonIndex) {
    this.#swiperEl[buttonIndex].classList.remove(Swiper.CLASS_ITEM_BUTTON_ACTIVE)
    this.#swiperEl[buttonIndex].classList.add(Swiper.CLASS_ITEM_BUTTON_INACTIVE)
  }

  openButton(buttonIndex){
    this.#swiperEl[buttonIndex].classList.add(Swiper.CLASS_ITEM_BUTTON_ACTIVE)
    this.#swiperEl[buttonIndex].classList.remove(Swiper.CLASS_ITEM_BUTTON_INACTIVE)
  }
} 

const swiperEl = document.querySelector('#swiper')
new Swiper(swiperEl)