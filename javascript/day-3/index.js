// Try creating a function that has parameters name of book & quantity of the book as an object, then display sentence if book can be purchased or not.

// Dummy stocks data. Pretend it lives in a database :P
const stocks = [
  { id: 1, bookID: 1234, quantity: 25 },
  { id: 2, bookID: 2345, quantity: 0 },
  { id: 3, bookID: 3456, quantity: 1 },
]
 
// A function to get the stock information for the book from the stocks data.
const getStock = bookID => stocks.find(stock => stock.bookID === bookID)

// A function to buy book that accepts a book object as the parameter.
const buyBook = ({ id, name, quantity }) => {
  if (!quantity) {
    return console.error('    Tell me how many books you want to buy')
  }

  const stock = getStock(id)

  if (!stock?.quantity) {
    return console.error(`    There is no stock currently available for your purchase of ${name}`)
  }

  const isPlural = stock.quantity > 1
  const toBe = isPlural ? 'are' : 'is'
  const articles = isPlural ? stock.quantity : 'a single of'
  const bookNoun = isPlural ? 'books' : 'book'
  const copyNoun = quantity > 1 ? 'copies' : 'copy'
  const auxiliary = stock.quantity >= quantity ? 'can' : 'can\'t'
  const sentence = `
    There ${toBe} ${articles} ${name} ${bookNoun} left in the stock.
    You ${auxiliary} get ${quantity} ${copyNoun} of this book right now.
  `

  console.log(sentence)
}

// A list of my actual wishlist of books that I want to buy
const wishlist = [
  { id: 1234, name: 'The Psychology of Money', quantity: 1 },
  { id: 2345, name: 'The Subtle Art of Not Giving a F*ck', quantity: 1 },
  { id: 3456, name: 'Filosofi Teras', quantity: 2 },
  { id: 4567, name: 'Atomic Habits' },
]

// Iterate the wishlist and buy the book
for (const book of wishlist) buyBook(book)
