// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.querySelector('.apod-flexbox');

const mainInputForm = document.querySelector('form');

// // APOD image explanation
// const apodImgTitle = document.querySelector('.space-APOD-content h2');
// const apodImgPara = document.querySelector('.space-APOD-content p');

// call parent to create dom elements
const explanatons = document.querySelector('.space-APOD-content');

const apodImgcopyrightClaims = document.querySelector(
  '.space-APOD-content > p.copyright',
);

const planetImagesCall = document.querySelector('.AJAX-planet-image');

// classes for the form element
// // Font awesome magnifying glass
const magnifying_glass = document.querySelector('.fa-magnifying-glass');

magnifying_glass.classList.add('fa-magnifying-glass');
magnifying_glass.classList.add('fa-solid');
// magnifying_glass.classList.add('m-1');
magnifying_glass.classList.add('rounded');

const glassBtn = document.querySelector('.span_icon_glass');

// APOD Main Img AJAX Call
function apodImgMain() {
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const createImgTag = document.createElement('img');
    createImgTag.setAttribute('src', xhr.response.hdurl);
    createImgTag.className = 'stretchedAPODimg rounded width_desktop_styling';
    apodImg.appendChild(createImgTag);
  });

  xhr.send();
}

apodImgMain();

function apodImgExplanation() {
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    // Creating h2 element for the APOD image
    const h2Creation = document.createElement('h2');
    h2Creation.className = 'appendingAPODpara';
    h2Creation.textContent = xhr.response.title;
    explanatons.appendChild(h2Creation);

    // creating the paragraph explaanation for my APOD image
    const paraCreation = document.createElement('p');
    paraCreation.className = 'APOD_explanation APOD_explanation_desktop_view';
    paraCreation.innerHTML = xhr.response.explanation;
    explanatons.appendChild(paraCreation);

    // creating the copyright footer/P element for my APOD image
    const copyrightText = document.createElement('p');
    copyrightText.className = 'copyright copyright-left';
    copyrightText.textContent = `© Copyright ${xhr.response.date}`;
    explanatons.appendChild(copyrightText);
  });

  xhr.send();
}

apodImgExplanation();

// Calling the Image/Video API

glassBtn.addEventListener('click', () => {
  const img = document.querySelector('.planet_img_api');

  if (img) {
    img.remove();
  }

  // if user types in a planet name get the correct planet image
  const inputSearch = document.querySelector('form input').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://images-api.nasa.gov/search?q=${inputSearch}`);
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    const randomNum = Math.floor(
      Math.random() * xhr.response.collection.items.length,
    );
    const numKeyword = Math.floor(Math.random() * 100 + 1);

    const imgElement = document.createElement('img');
    imgElement.setAttribute(
      'src',
      xhr.response.collection.items[randomNum].links[0].href,
    );

    imgElement.className = 'd-block rounded planet_img_api';
    imgElement.height = '200';

    const favoritePlanetsCall = document.createElement('div');
    favoritePlanetsCall.className = 'favoritePlanets';

    // This A tag will wrap around the img tag and show the image as a lightbox
    const lightbox = document.createElement('a');
    lightbox.setAttribute('data-lightbox', 'cases');
    lightbox.className = ' CSS_styled_lightbox_cursor';

    // Main Content
    // Linking it to open the lightbox to the xhr image
    lightbox.setAttribute(
      'href',
      xhr.response.collection.items[randomNum].links[0].href,
    );

    favoritePlanetsCall.appendChild(lightbox);
    // Setting the current images content in the lightbox

    xhr.response.collection.items[randomNum].data.forEach((inside_data) => {
      lightbox.setAttribute(
        'data-title',
        `${inside_data.title}
      <span class='d-block'>Center:${inside_data.center}</span>
      <span class='d-block'>Date created: ${inside_data.date_created}</span>
      <span class='d-block'>Planet Data: ${inside_data.keywords}</span>
      <span class='d-block'>Location: ${inside_data.location}'></span>
      <span class='d-block'>Photographer: ${inside_data.Photographer}'></span>
      <span class='d-block'>nasa_id: ${inside_data.nasa_id}'></span>`,
      );
      console.log(inside_data);
    });

    planetImagesCall.appendChild(favoritePlanetsCall);
    lightbox.appendChild(imgElement);

    // Getting the title/info about the image - h3

    // making of the content to wrap for the favorites
    //     const favoritesMakerSec = document.createElement('div')
    //     favoritesMakerSec.className = 'favoritePlanetInformation'

    // lightbox.appendChild(favoritesMakerSec)
    const headerDescribe = document.createElement('h3');

    headerDescribe.className = 'header_Img_ttl text-center';
    headerDescribe.textContent =
      xhr.response.collection.items[randomNum].data[0].title;

    // Getting the para/info about the image - p

    const paraDescribe = document.createElement('p');

    paraDescribe.className = 'para_img_ttl img_des_min_w';
    paraDescribe.textContent =
      xhr.response.collection.items[randomNum].data[0].description;

    const header_title = document.querySelector('.header_Img_ttl');
    const image_description = document.querySelector('.para_img_ttl');

    if (header_title) {
      header_title.remove();
    }
    if (image_description) {
      image_description.remove();
    }
    // );

    favoritePlanetsCall.appendChild(headerDescribe);
    favoritePlanetsCall.appendChild(paraDescribe);

    // info ending

    // Creation of the small star favorite

    const star = document.querySelector('.fa-star');

    const starMaker = document.createElement('i');
    starMaker.className = 'fas fa-star fs-4 m-auto text-center d-block fs-3';
    favoritePlanetsCall.appendChild(starMaker);

    // star query if statment clause
    if (star) {
      star.remove();
    }

    starMaker.addEventListener('click', () => {
      // Adding classes to the stars
      starMaker.classList.add('starColor');
      starMaker.classList.add('starPointer');

      // Calling/utilizing the viewSwap function
      viewSwap('favorites');

      // DOM content creation's

      // renderEntriy function create DOM tree structure
    });
  });
  const entriesbottom = document.querySelector('.favoritePlanets');

  xhr.send();
});

const entriesTop = document.querySelector('.topForm');
const entriesBottom = document.querySelector('.bottomForm');
console.log(entriesBottom);

// // entries is whole form
function viewSwap(entries) {
  if (entries === 'entries') {
    entriesTop.classList.add('invisible');
    entriesBottom.classList.remove('invisible');

    // entry-form is the entry on top
  } else if (entries === 'favorites') {
    entriesTop.classList.remove('invisible');
    entriesBottom.classList.add('invisible');
  }
}
