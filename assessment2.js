// const books = [
// { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
// isAvailable: true },
// { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
// isAvailable: false },
// { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
// 1866, isAvailable: true },
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
// isAvailable: false },
// { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
// ];

// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

const books = [
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
 isAvailable: true },
 { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
 isAvailable: false },
 {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
 1866, isAvailable: true },
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
 },
 { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];
function getAvailableBooks(books){
    empty = []
    for(book in books){
        if(book in books){
        empty.push(book)
        }
    }
    return empty
}
console.log(getAvailableBooks(books));

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

const books2 = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
   ];
function getBooksByAuthor(authorsName) {
        for(title in authorsName){
            return title
        }
} 
console.log(getBooksByAuthor({author: 'Fyodor Dostoevsky'}));

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).
const books3 = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
   ];

function addNewBook({book}) {
    empty = []
    for(i in book){
       empty.append({title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925}) 
    }
    return empty
}
console.log(addNewBook({book}));

// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
const books4 = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
   ];

function checkoutBook({bookTitle}) {
    for(i in bookTitle){
        if( i in bookTitle){
            return False
        }
        else{
            return True
        }
    }
console.log({title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925}); 

}
// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
const books5 = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
   ];

function returnBook({title}) {
    if(i in title){
        return True
    }
    else {
        return False
    }
}
console.log(returnBook({title: 'The Great Gatsby'}));

     