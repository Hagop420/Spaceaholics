const apiKeyw = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

// if user types in a planet name get the correct planet image
const inputSearch = document.querySelector('form input').value;
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://images-api.nasa.gov/search?q=pluto`);
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  console.log(xhr.response);

  console.log(xhr.response.collection.items[2].links[0].href);

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', xhr.response.collection);
  // xhr.response.collection.items.forEach(el => {
  //   el.links.forEach(elsImg =>{
  //     console.log(elsImg.href)
  //   })
  // })
});
xhr.send();
