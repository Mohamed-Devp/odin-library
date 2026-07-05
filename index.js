const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template");

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

    checkbox.addEventListener("click", book.toggleRead);

    cards.appendChild(card);
}
