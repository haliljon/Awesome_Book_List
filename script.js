let bookList = JSON.parse(localStorage.getItem('books'));

const form = document.querySelector('form');
const inputTitle = document.querySelector('.title');
const inputAuthor = document.querySelector('.author');
const divBooks = document.createElement('div');
divBooks.className = 'books';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputTitle !== null && inputAuthor !== null) {
    const newBook = { author: inputAuthor.value, title: inputTitle.value };
    if (localStorage.getItem('books') === null) {
      const bookCollection = [];
      bookCollection.push(newBook);
      localStorage.setItem('books', JSON.stringify(bookCollection));
    } else {
      const bookCollection = JSON.parse(localStorage.getItem('books'));
      bookCollection.push(newBook);
      localStorage.setItem('books', JSON.stringify(bookCollection));
    }
    bookList.push(newBook);
  }

  divBooks.innerHTML += `<p>${inputAuthor.value}</p>
      <p>${inputTitle.value}</p>
      <button type="button" class="remove">Remove</button>
      <hr />`;
});

for (let i = 0; i < bookList.length; i += 1) {
  divBooks.innerHTML += `<p>${bookList[i].author}</p>
        <p>${bookList[i].title}</p>
        <button type="button" class="remove">Remove</button>
        <hr />`;
}
console.log(bookList);
const body = document.querySelector('body');
body.insertBefore(divBooks, form);
const remove2 = document.querySelectorAll('.remove');

remove2.forEach((element, index) => {
  element.addEventListener('click', () => {
    bookList.splice(index, 1);

    console.log(bookList);
  });
});
