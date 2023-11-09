class Bookshelf {
    constructor() {
        this.books = []
    }
    addBook(book){
        this.books.push(book)
    }
    removeBook(book){
        this.books = this.books.filter(books => {
            return books !== book
        })
    }
    getTotalBooks(){
        return this.books.length
    }
}

const bookshelf = new Bookshelf(); 
bookshelf.addBook("The Great Gatsby"); 
bookshelf.addBook("To Kill a Mockingbird"); 
bookshelf.addBook("Pride and Prejudice"); 
console.log(bookshelf.getTotalBooks()); // 3 
bookshelf.removeBook("To Kill a Mockingbird"); 
console.log(bookshelf.getTotalBooks()); // 2 
