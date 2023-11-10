const searchEngineUrl = 'https://duckduckgo.com/?q=';

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById('search-bar');
const formElement = document.getElementById('search-form');

function search() {
  let value = searchBarElement.value;
  if(!value) {
    return;
  }
  if(value.startsWith('https://') || value.startsWith('http://')) {
    window.location = value;
  } else {
    window.location = searchEngineUrl + encodeURIComponent(value);
  }
}

searchBarElement.focus();
searchBarElement.value = '';

formElement.addEventListener('submit', (ev) => {
  ev.preventDefault();
  search();
})

document.addEventListener('keypress', (event) => {
  if(event.keyCode == escapeKeyCode) {
    searchBarElement.blur();
    searchBarElement.value = '';
  } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode ) {
    searchBarElement.focus();
  }
})