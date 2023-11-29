const apiKeyw = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

// API request creation with XMLHTTPrequest
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://images-api.nasa.gov/search?q=earth`);
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.send();
