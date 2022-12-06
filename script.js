let bookList = JSON.parse(localStorage.getItem('books'));

const form = document.querySelector('form');
const inputTitle = document.querySelector('.title');
const inputAuthor = document.querySelector('.author');
const divBooks = document.createElement('div');
divBooks.className = 'books';
const add = document.querySelector('.submit');
const body = document.querySelector('body');
body.insertBefore(divBooks, form);

add.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputTitle.value !== '' && inputAuthor.value !== '') {
    const newBook = { author: inputAuthor.value, title: inputTitle.value };
    bookList.push(newBook);
    localStorage.setItem('books', JSON.stringify(bookList));
    divBooks.innerHTML += `<div><p>${inputAuthor.value}</p>
      <p>${inputTitle.value}</p>
      <button type="button" class="remove">Remove</button>
      <hr /></div>`;
  }
  inputAuthor.value = '';
  inputTitle.value = '';
  let remove2 = document.querySelectorAll('.remove');

  remove2.forEach((element, index) => {
    element.addEventListener('click', () => {
      console.log('CLIked');
      bookList.splice(index, 1);
      divBooks.removeChild(element.parentElement);
      localStorage.setItem('books', JSON.stringify(bookList));
    });
  });
  console.log('Clicked add', remove2);
});

for (let i = 0; i < bookList.length; i += 1) {
  divBooks.innerHTML += `<div><p>${bookList[i].author}</p>
        <p>${bookList[i].title}</p>
        <button type="button" class="remove">Remove</button>
        <hr /></div>`;
}
console.log(bookList);

let remove2 = document.querySelectorAll('.remove');

remove2.forEach((element, index) => {
  element.addEventListener('click', () => {
    console.log('CLIked');
    bookList.splice(index, 1);
    divBooks.removeChild(element.parentElement);
    localStorage.setItem('books', JSON.stringify(bookList));
  });
});
