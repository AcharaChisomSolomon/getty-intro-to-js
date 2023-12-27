// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

function addFavoriteBook(book) {
    if (!book.includes('Great')) {
        favoriteBooks.push(book)
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`)
    for (const book of favoriteBooks) {
        console.log(book)
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks()