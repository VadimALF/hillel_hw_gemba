'use strict'

function Calculator(base) {
  this.base = base // храним результат последней операции
 
  this.add = function (item) {
    if (isFinite(item)) {
      base += item
    }
  }

  this.sub = function (item) {
    if (isFinite(item)) {
      base -= item
    }
  },
    
  this.set = function (item) {
    if (isFinite(item)) {
      base = item
    }
  },

  this.get = function () {
    return base
  }
}

const calc = new Calculator(100)

calc.add(10);     // 110 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10);     // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20);     // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20);     // 20 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10);     // 30 записывает в this.base (в консоль ничего выводить не нужно)
calc.add('qwe');  // игнорируем все что не число и значение 30 не меняется
calc.get();       // 30 возвращаем значение
console.log(calc.get())
