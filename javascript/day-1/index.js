// Task: Create a function that has parameters name of book & quantity of the book, then display sentence information of the product.
// Example: There are 5 Harry Potter books left in stock

function printBookStock(name, quantity) {
  if (!quantity) {
    return console.log(`There are no books left for ${name}`)
  }

  const isPlural = quantity > 1

  let toBe = isPlural ? 'are' : 'is'
  let articles = isPlural ? quantity : 'a single'
  let noun = isPlural ? 'books' : 'book'
  let sentence = `There ${toBe} ${articles} of ${name} ${noun} left in the stock`

  console.log(sentence)
}

printBookStock("The Psychology of Money", 1) // There is a single of The Psychology of Money book left in the stock
printBookStock("Harry Potter", 5) // There are 5 Harry Potter books left in the stock
printBookStock("Lord of the Ring", 0) // There are no books left for Lord of the Ring
