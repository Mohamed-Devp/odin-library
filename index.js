const addBookForm = document.querySelector(".form_label_add-book");

const titleInp = document.querySelector(".field__inp_name_title");
const authorInp = document.querySelector(".field__inp_name_author");
const readToggleBtn = document.querySelector(".toggle__btn_name_read");

const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template");

let library = [];

function Book(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function renderCard(book) {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    
    const title = card.querySelector(".card__title");
    title.textContent = book.title;

    const author = card.querySelector(".card__author");
    author.textContent = book.author;

    const checkbox = card.querySelector(".toggle__btn");
    checkbox.id = `read-${book.id}`;
    checkbox.checked = book.read;

    const label = card.querySelector(".toggle__label");
    label.htmlFor = checkbox.id;

    const deleteBtn = card.querySelector(".btn_label_delete");

    checkbox.addEventListener("change", () => {
        book.toggleRead();
    });

    deleteBtn.addEventListener("click", () => {
        library = library.filter(libraryBook => {
            return libraryBook.id !== book.id;
        });

        cards.removeChild(card);
    });

    cards.appendChild(card);
}

function addBookToLibrary(title, author, read) {
    const book = new Book(crypto.randomUUID(), title, author, read);

    library.push(book);

    renderCard(book);
}

addBookForm.addEventListener("submit", () => {
    const title = titleInp.value;
    const author = authorInp.value;
    const read = readToggleBtn.checked;

    addBookToLibrary(title, author, read);

    addBookForm.reset();
});