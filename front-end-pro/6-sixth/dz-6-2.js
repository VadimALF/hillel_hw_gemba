'use strikt'

const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
  {
    type: CATEGORY,
    name: 'Mac',
    menu: [
      {
        type: PRODUCT,
        name: 'MacBook Pro 16”',
      },
      {
        type: PRODUCT,
        name: 'iMac 24”',
      },
      {
        type: PRODUCT,
        name: 'iMac 27”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: CATEGORY,
            name: 'Featured Magic',
            menu: [
              {
                type: PRODUCT,
                name: 'Magic Keyboard',
              },
              {
                type: PRODUCT,
                name: 'Magic Trackpad',
              },
            ],
          },
          {
            type: CATEGORY,
            name: 'Audio',
            menu: [
              {
                type: PRODUCT,
                name: 'AirPods Pro',
              },
              {
                type: PRODUCT,
                name: 'AirPods Max',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Ipad',
    menu: [
      {
        type: PRODUCT,
        name: 'iPad Pro 11”',
      },
      {
        type: PRODUCT,
        name: 'iPad Pro 12.9”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: PRODUCT,
            name: 'Apple Pencil',
          },
          {
            type: PRODUCT,
            name: 'Smart Keyboard',
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Empty Category',
    menu: [],
  },
  ['-----------', '0', 'можно даже добавить любой массив с текстом', '1',
    '2', '3', 'Текст будет в списке, но цифры не покажет', '4', 8, 10,
   '-----------']
]

let res = ''
let spaceBar = ''
const menuStr = printMenu(menu)
console.log(menuStr)

function printMenu(menu, level = 0) {
  menu.forEach(element => {
    spaceBar = new Array(level).fill(' ').join('')
    parserObject(element, level+1)
    })
  return res
}

function parserObject(obj, level) {
  for (const key in obj) {
    const value = obj[key]
    if (typeof value === 'string') {
      parserValue(value)
    }
    if (Array.isArray(value)) {
      printMenu(value, level)
    }
  }
}    
  
function parserValue(value, level) {
  switch (value) {
    case 'category': res += spaceBar + '* '
      break
    case 'product': res += spaceBar + '- '
      break
    default: res += value + '\n'
  }
}  