const myLibrary = [];

function Book(title, author, completed) {
    this.title = title;
    this.author = author;
    // this.pages = pages;
    this.completed = completed;
    this.info = function () {
        return (`${title}, ${author}, ${(completed ? `finished reading.` : `not read yet.`)}`)
    }
    return;
}

// const entry_1 = new Book("A", "B", false);
// const entry_2 = new Book("C", "D", true);

// myLibrary.push(entry_1);
// myLibrary.push(entry_2);

// let container = document.getElementById("show-content");
// for (let i = 0; i < myLibrary.length; i++) {
//     let div = document.createElement("div");
//     div.classList.add("book-card");
//     div.textContent = `${i + 1}. The book is ${myLibrary[i].title} written by ${myLibrary[i].author}. It ${(myLibrary[i].completed ? `has been read.` : `has not been read yet.`)}`;
//     container.appendChild(div);
// }

// console.log(entry_1.info());
// console.log(entry_2.info());

// console.log(myLibrary);
// console.log(myLibrary[0]);


// let bookQuery = document.getElementById("book_name").value;
// let authorQuery = document.getElementById("author").value;
// let statusQuery = document.getElementById("status").value;

let buttonQuery = document.getElementById("submitBtn");

buttonQuery.addEventListener('click', (evt) => {
    evt.preventDefault();
    let bookQuery = document.getElementById("book_name").value;
    let authorQuery = document.getElementById("author").value;
    let statusQuery = document.getElementById("status").value;
    console.log(statusQuery);

    if (!validateSubmission(bookQuery, authorQuery)) {
        alert("Please fill the form correctly.")
    }
    else {
        addBookToLibrary(bookQuery, authorQuery, statusQuery);
        console.log(statusQuery);
        console.log("SUCCESSFULLY ADDED BOOK TO LIBRARY.")
    }
    return
});


function validateSubmission(book, author) {
    if (book.length >= 1 && author.length >= 1) {
        return true;
    }
    else {
        return false;
    }
}

let book_list_container = document.getElementById("show-book");
let button_container = document.getElementById("delete-book");

function addBookToLibrary(title, author, status) {

    // creates a book object
    const newBook = new Book(title, author, status);

    //appends into library array
    myLibrary.push(newBook);

    //create cardDiv
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("book-card");
    cardDiv.classList.add(`${title}`)
    cardDiv.textContent = `${myLibrary.length}. The book is ${title} written by ${author}. It ${(status === "read" ? `has been read.` : `has not been read.`)}`
    book_list_container.appendChild(cardDiv);


    //create button linked with cardDiv
    const newButton = document.createElement("button");
    newButton.textContent = "Delete"
    newButton.value = `${title}`
    newButton.addEventListener('click', function (e) {
        // removes book from myLibrary linked with the button
        removeBook(myLibrary, newButton.value);
    })
    button_container.appendChild(newButton);
    return;
}

function removeBook(source, interest) {

    // delete book from library
    for (let x = 0 ; x < source.length; x ++ ) {
        if (source[x].title === interest) {
            myLibrary.splice(x, 1);
        }
    }
    let findDiv = book_list_container.children;
    let findButton = button_container.children;
    for (let x = 0; x < findDiv.length; x ++ ) {
        if (findDiv[x].classList.contains(interest)) {
            findDiv[x].remove()
        }
        if (findButton[x].value === interest) {
            findButton[x].remove();
        }
    }
    return;
}

function reset() {
    book_list_container.innerHTML = "";
    button_container.innerHTML = "";
    return;
}


// function removeBook(source, interest) {
//     for (let x = 0; x < source.length; x++) {
//         if (source[x].title === interest) {
//             myLibrary.splice(x, 1);
//         }
//     }
//     let findDiv = container.children;
//     console.log(findDiv);
//     let findDivTwice = findDiv.children;
//     for (let x = 0; x < findDivTwice.length; x++) {
//         if (findDivTwice[x].classList.contains(interest)) {
//             findDivTwice[x].remove();
//         }
//         if (findDivTwice[x].value === interest) {
//             findDivTwice.remove();
//         }
//     }
// }


// function removeBook(source, interest) {
//     for (let x = 0; x < source.length; x++) {
//         if (source[x].title === interest) {
//             myLibrary[x].remove();
//         }
//     }
// }

// document.getele


// function reset() {
//     container.innerHTML = "";
// }