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
    paraCreation.textContent = xhr.response.explanation;
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

magnifying_glass.addEventListener('click', () => {
  const img = document.querySelector('.planet_img_api');
  console.log(typeof img);
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

    const imgElement = document.createElement('img');
    imgElement.setAttribute(
      'src',
      xhr.response.collection.items[randomNum].links[0].href,
    );
    imgElement.className = 'd-block rounded planet_img_api';
    imgElement.height = '230';

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

    // Setting the current images content in the lightbox
    // lightbox.setAttribute('data-title' ,  xhr.response.collection.items[randomNum].data[0].href)
    // lightbox.setAttribute('data-title' ,  xhr.response.collection.items[randomNum].albums)

    xhr.response.collection.items[randomNum].data.forEach((inside_data) => {
      lightbox.setAttribute('data-title', `${inside_data.keywords[0]}`);
    });

    // testing it out

    xhr.response.collection.items[randomNum].data.forEach((fo) =>
      console.log(fo.title),
    );

    planetImagesCall.appendChild(lightbox);
    lightbox.appendChild(imgElement);
  });
  xhr.send();
});
// comment parsed for git purposes
