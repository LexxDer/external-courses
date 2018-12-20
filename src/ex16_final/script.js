// var booksData = [
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51TYJDHEJSL._AC_UL320_SR248,320_.jpg',
//         title: 'Jewels of Nizam',
//         author: 'Geeta Devi',
//         rating: '3',
//         views: '20',
//         year: '2011',
//         price: '19.5'
//     },
//     {
//         imgUrl: 'https://b.zmtcdn.com/data/pictures/6/4000236/65f5b0154f1824897086b882a7060f8a_featured_v2.jpg',
//         title: 'Cakes & Bakes',
//         author: 'Sanjeev Kapoor',
//         rating: '1',
//         views: '4303',
//         year: '2013',
//         price: '22.3'
//     },
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51FqIlv4TaL._SX258_BO1,204,203,200_.jpg',
//         title: 'Jamies Kitchen',
//         author: 'Jamie Oliver',
//         rating: '5',
//         views: '3054',
//         year: '2018',
//         price: '70.1'
//     },
//     {
//         imgUrl: 'https://www.freebiefindingmom.com/wp-content/uploads/2015/07/Cheap-meals-for-large-families-pin.jpg',
//         title: 'Inexpensive Family Meals',
//         author: 'Simon Holst',
//         rating: '3',
//         views: '3000',
//         year: '2013',
//         price: '110'
//     },
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51z%2BXZgMFtL._SX384_BO1,204,203,200_.jpg',
//         title: 'Paleo Slow Cooking',
//         author: 'Chrissy Gower',
//         rating: '2',
//         views: '302',
//         year: '2001',
//         price: '5.3'
//     },
//     {
//         imgUrl: 'https://www.betterreading.com.au/wp-content/uploads/2014/10/9781921382192-195x298.jpg',
//         title: 'Cook Like an Italian',
//         author: 'Tobie Puttock',
//         rating: '3',
//         views: '22',
//         year: '2000',
//         price: '0'
//     },
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51BiwDk0f3L._SX367_BO1,204,203,200_.jpg',
//         title: 'Indian Cooking',
//         author: 'Geeta Devi',
//         rating: '3',
//         views: '15',
//         year: '2007',
//         price: '30.2'
//     },
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/910r6WKtPfL.jpg',
//         title: 'Jamie Does',
//         author: 'Jamie Oliver',
//         rating: '1',
//         views: '345',
//         year: '2011',
//         price: '0'
//     },
//     {
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61AkWIb6ArL._SX258_BO1,204,203,200_.jpg',
//         title: 'Jamies italy',
//         author: 'Jamie Oliver',
//         rating: '2',
//         views: '7',
//         year: '2018',
//         price: '90.7'
//     },
//     {
//         imgUrl: 'https://images.gr-assets.com/books/1474585768l/31146564.jpg',
//         title: 'Vegetables Cookbook',
//         author: 'Matthew Biggs',
//         rating: '5',
//         views: '332',
//         year: '2011',
//         price: '22.3'
//     },
// ];

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
