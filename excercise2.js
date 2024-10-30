class Book{
    constructor(title, author, isAvailable){
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable || true;
    }

    borrow(){
        this.isAvailable ? this.isAvailable = false : true;
        console.log("You have borrowed this book");
    }

    returnBook(){
        if(this.isAvailable == false){
            this.isAvailable = true;
            console.log("You have returned the book and now is available");
        }
    }
}

class Library {
    constructor(name, books){
        this.name = name;
        this.books = books;
    }

    addBook(book){
        this.books.push(book);
    }

    listAvailableBooks(){
        let availableBooks = this.books.filter(item => item.isAvailable);
        console.log(availableBooks);
    }

    findBookByTitle(title){
        let book = this.books.find(item => item.title == title)
         return `Book Found: ${book.title}` 
    }
}


const book1 = new Book("Interestelar", "Yubor", true);
const book2 = new Book("Inception", "Leidy", true)
const library1 = new Library("Yubor Library", [])

library1.addBook(book1)
library1.addBook(book2)
console.log(library1)
console.log(library1.findBookByTitle("Inception"))


/*console.log(book1)
book1.borrow()
console.log(book1)
book1.returnBook()
console.log(book1)*/