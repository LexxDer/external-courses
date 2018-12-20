
var booksData = [];

function getFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            booksData = JSON.parse(xhr.responseText);
            renderBooks(booksData);
        }
    }
    xhr.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
    xhr.send();
}

document.addEventListener("DOMContentLoaded", getFromServer);

function renderBooks(arr) {
    var bookList = document.querySelector('.wrapperbooks__books');
    bookList.innerHTML = '';
    arr.forEach(function (item) {
        var bookItem = createBook(item);
        bookList.appendChild(bookItem);
    });
}

//создание элемента
function makeElement(tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

//создание книжной карточки
function createBook(books) {
    var listItem = makeElement('li', 'book');

    var picture = makeElement('img', 'book__image');
    picture.src = books.image_url;
    picture.alt = books.title;
    listItem.appendChild(picture);

    var title = makeElement('h2', 'book__title', books.title);
    listItem.appendChild(title);

    var author = makeElement('p', 'book__author');
    author.textContent = 'by ' + books.author.firstName + ' ' + books.author.lastName;
    listItem.appendChild(author);

    var ratingForm = makeElement('div', 'book__rating');
    listItem.appendChild(ratingForm);

    for (var i = 5; i >= 1; i--) {
        var divRating = makeElement('div', 'book__divRating');
        divRating.htmlFor = "star_" + books.id + "#" + i;

        if (books.rating >= i) {
            divRating.classList.add('fa-star');
        } else {
            divRating.classList.add('fa-star-o');
        }

        ratingForm.appendChild(divRating);
    }

    var price = makeElement('p', 'book__info');
    price.textContent = 'price: ' + books.cost;
    listItem.appendChild(price);

    return listItem;
};

var bookList = document.querySelector('.wrapperbooks__books');

var filter_select_el = document.getElementsByName('filter');
filter_select_el.forEach(function (item) {
    item.addEventListener('change', setMenuClass);
});

function setMenuClass() {

    for (var i = 0; i < filter_select_el.length; i++) {
        if (filter_select_el[i].type === "radio" && filter_select_el[i].checked) {
            var newBooks = [];
            switch (filter_select_el[i].id) {
                case 'all':
                    newBooks = booksData;
                    break;
                case 'recent':
                    newBooks = [...booksData].sort((a, b) => b.updatedAt - a.updatedAt);
                    break;
                case 'pop':
                    newBooks = [...booksData].sort((a, b) => b.rating - a.rating);
                    break;
                case 'free':
                    newBooks = [...booksData].filter(a => a.cost === 0);
                    break;
            }

            renderBooks(newBooks);
        }
    }
}
