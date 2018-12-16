var id = 0;
function Book(cover, title, author, rating, views, year, price) {
    this.cover = cover;
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.views = views;
    this.year = year;
    this.price = price;
    this.id = id;
    var that = this;
    id += 1;


    var book = document.createElement('div');
    book.className = "books";
    wrapperbooks.appendChild(book);

    var cover = document.createElement('div');
    cover.className = "cover";
    cover.style.background = 'url(' + this.cover + ') top left/cover';
    book.appendChild(cover);

    var title = document.createElement('h3');
    title.className = "title";
    title.innerHTML = this.title;
    book.appendChild(title);

    var author = document.createElement('span');
    author.className = "author";
    author.innerHTML = "by " + this.author;
    book.appendChild(author);

    var rating = document.createElement('div');
    rating.className = "rating";
    rating.innerHTML = this.rating;
    book.appendChild(rating);

    var info = document.createElement('span');
    info.className = "info";
    info.innerHTML = "views: " + this.views + " " + "price: " + this.year + " " + "updated: " + this.price;
    book.appendChild(info);
}





var books = [];

var book1 = new Book('https://images-na.ssl-images-amazon.com/images/I/51TYJDHEJSL._AC_UL320_SR248,320_.jpg',
    'Jewels of Nizam', 'Geeta Devi', 3, 20, 2011, 19.5);
books.push(book1);
var book2 = new Book('https://b.zmtcdn.com/data/pictures/6/4000236/65f5b0154f1824897086b882a7060f8a_featured_v2.jpg',
    'Cakes & Bakes', 'Sanjeev Kapoor', 1, 4303, 2013, 22.3);
books.push(book2);
var book3 = new Book('https://images-na.ssl-images-amazon.com/images/I/51FqIlv4TaL._SX258_BO1,204,203,200_.jpg',
    'Jamies Kitchen', 'Jamie Oliver', 5, 3054, 2018, 70.1);
books.push(book3);
var book4 = new Book('https://www.freebiefindingmom.com/wp-content/uploads/2015/07/Cheap-meals-for-large-families-pin.jpg',
    'Inexpensive Family Meals', 'Simon Holst', 3, 3000, 2013, 110);
books.push(book4);
var book5 = new Book('https://images-na.ssl-images-amazon.com/images/I/51z%2BXZgMFtL._SX384_BO1,204,203,200_.jpg',
    'Paleo Slow Cooking', 'Chrissy Gower', 2, 302, 2001, 5.3);
books.push(book5);
var book6 = new Book('https://www.betterreading.com.au/wp-content/uploads/2014/10/9781921382192-195x298.jpg',
    'Cook Like an Italian', 'Tobie Puttock', 3, 22, 2000, 0);
books.push(book6);
var book7 = new Book('https://images-na.ssl-images-amazon.com/images/I/51BiwDk0f3L._SX367_BO1,204,203,200_.jpg',
    'Indian Cooking', 'Geeta Devi', 3, 15, 2007, 30.2);
books.push(book7);
var book8 = new Book('https://images-na.ssl-images-amazon.com/images/I/910r6WKtPfL.jpg',
    'Jamie Does', 'Jamie Oliver', 1, 345, 2011, 0);
books.push(book8);
var book9 = new Book('https://images-na.ssl-images-amazon.com/images/I/61AkWIb6ArL._SX258_BO1,204,203,200_.jpg',
    'Jamies italy', 'Jamie Oliver', 2, 7, 2018, 90.7);
books.push(book9);
var book10 = new Book('https://images.gr-assets.com/books/1474585768l/31146564.jpg',
    'Vegetables Cookbook', 'Matthew Biggs', 5, 332, 2011, 22.3);
books.push(book10);

var domBooks = document.querySelectorAll('.books');

var filter_select_el = document.getElementsByName('filter');
for (i = 0; i < 4; i++) {
    filter_select_el[i].addEventListener('click', setMenuClass);
}
//var items_el = document.getElementById('wrapperbooks');

function setMenuClass() {

    for (var i = 0; i < filter_select_el.length; i++) {
        if (filter_select_el[i].type === "radio" && filter_select_el[i].checked) {
            if (filter_select_el[i].id === 'all') {
                alert("selected: 1");
            }
            else if (filter_select_el[i].id === 'recent') {
                alert("selected: 2");
            }
            else if (filter_select_el[i].id === 'pop') {
                alert("selected: 3");
            }
            else if (filter_select_el[i].id === 'free') {
                clear();
            }
        }
    }
}
function clear() {
    for (i = 0; i < domBooks.length; i++) {
        wrapperbooks.removeChild(domBooks[i]);
    }
}
    