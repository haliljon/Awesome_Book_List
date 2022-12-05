let bookList = [
  { author: 'J. K. Rowling', title: 'Harry Potter' },
  { author: 'George Orwell', title: 'Animal Farm' },
];

const form = document.querySelector('form');
const inputTitle = document.querySelector('.title');
const inputAuthor = document.querySelector('.author');
const divBooks = document.createElement('div');
divBooks.className = 'books';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputTitle !== null && inputAuthor !== null) {
    const newBook = { author: inputAuthor.value, title: inputTitle.value };
    bookList.push(newBook);
  }

  divBooks.innerHTML += `<p>${inputAuthor.value}</p>
      <p>${inputTitle.value}</p>
      <button type="button" class="remove">Remove</button>
      <hr />`;
});
const body = document.querySelector('body');
body.insertBefore(divBooks, form);

// for (let i = 0; i < bookList.length; i++) {
//   divBooks.innerHTML += `<p>${bookList[i].author}</p>
//     <p>${bookList[i].title}</p>
//     <button type="button" class="remove">Remove</button>
//     <hr />`;
// }
