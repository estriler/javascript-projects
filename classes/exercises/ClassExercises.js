// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, numPages, numCheckout, isDiscarded = false) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckout = numCheckout;
        this.isDiscarded = isDiscarded;
    }
    checkout(uses = 1) {
        this.numCheckout += uses;
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckout, isDiscarded = false){
        super(title, author, copyright, isbn, numPages, numCheckout, isDiscarded = false);
    }
    dispose(currentyear){
        if(currentyear - this.copyright > 5){
            this.isDiscarded = true;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckout, isDiscarded = false){
        super(title, author, copyright, isbn, numPages, numCheckout, isDiscarded = false);
    }
    dispose(){
        if(this.numCheckout > 100){
            this.isDiscarded = true;
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);
let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false);

// Code exercises 4 & 5 here:

console.log(newManual);
newManual.dispose(2024);
console.log(newManual);
console.log(newNovel);
newNovel.checkout(5);
console.log(newNovel);