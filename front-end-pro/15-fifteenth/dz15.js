

class Tabs {
  static CLASS_BUTTON_OPEN = 'tabs-item-button-open'
  static CLASS_BUTTON = 'tabs-item-button'
  static CLASS_CONTENT = 'tabs-item-content'
  static CLASS_OPEN = 'open'

  constructor(tabsEl) {
    this.tabsEl = tabsEl
    this.activeTabIndex = 0
    this.bindStyles()
    this.tabsEl.addEventListener('click', this.onTabsElClick.bind(this))
  }

  bindStyles() {
    const [buttons, contents] = this.tabsEl.children
    let i = 0

    for (const buttonEl of buttons.children) {
      if (i === 0) {
        buttonEl.classList.add(Tabs.CLASS_BUTTON_OPEN)
      }

      i++

      buttonEl.classList.add(Tabs.CLASS_BUTTON)
    }

    i = 0
    
    for (const contentEl of contents.children) {
      if (i === 0) {
        contentEl.classList.add(Tabs.CLASS_OPEN)
      }

      i++

      contentEl.classList.add(Tabs.CLASS_CONTENT)
    }
  }

  onTabsElClick(e) {
    if (e.target.classList.contains(Tabs.CLASS_BUTTON)) {
      const buttonEl = e.target
      const contentEl = this.findContententEl(buttonEl)

      contentEl.classList.add(Tabs.CLASS_OPEN)
      buttonEl.classList.add(Tabs.CLASS_BUTTON_OPEN)
    }
  }

  findContententEl(el) {
    const buttons = Array.from(document.getElementsByClassName(Tabs.CLASS_BUTTON))
    const contents = Array.from(document.getElementsByClassName(Tabs.CLASS_CONTENT))

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === el) {
        this.activeTabIndex = i
      }
      else {
        this.removeClassOpenEl(contents[i], buttons[i])
      }
    }

    return contents[this.activeTabIndex]
  }

  removeClassOpenEl(contentEl, buttonEl) {
    contentEl.classList.remove(Tabs.CLASS_OPEN)
    buttonEl.classList.remove(Tabs.CLASS_BUTTON_OPEN)
  }
}

const tabsEl = document.querySelector('#tabs')
new Tabs(tabsEl)