// Create a function that has parameters name of book & quantity of the book, then display sentence if book can be purchased or not.
// Simulate if the book purchased until that book sold out.

let stock = 25 // Dummy stock data

function buyBook(name, quantity = 1) {
  if (!quantity) {
    return console.error('Tell me how many books you want to buy')
  }

  if (!stock) {
    return console.error(`\t\t${name} is sold out!\n`)
  }

  const isPlural = stock > 1
  const toBe = isPlural ? 'are' : 'is'
  const articles = isPlural ? stock : 'a single of'
  const noun = isPlural ? 'books' : 'book'
  const auxiliary = stock >= quantity ? 'can' : 'can\'t'
  const sentence = `
    There ${toBe} ${articles} ${name} ${noun} left in the stock.
    You ${auxiliary} get this book now.
  `

  console.log(sentence)
}

function buyAllBook(name) {
  while (stock >= 0) {
    buyBook(name)
    stock--
  }
}

buyAllBook('The Psychology of Money')
