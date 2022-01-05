// Task: Create a function that has parameters name of book & quantity of the book, then display sentence information of the product.
// Example: There are 5 Harry Potter books left in stock

function printBookStock(name, quantity) {
  if (!quantity) {
    return console.log(`There are no books left for ${name}`)
  }

  let toBe = quantity > 1 ? 'are' : 'is'
  let articles = quantity > 1 ? quantity : 'a single of'
  let noun = quantity > 1 ? 'books' : 'book'
  let sentence = `There ${toBe} ${articles} ${name} ${noun} left in the stock`

  console.log(sentence)
}

printBookStock("The Psychology of Money", 1) // There is a single of The Psychology of Money book left in the stock
printBookStock("Harry Potter", 5) // There are 5 Harry Potter books left in the stock

