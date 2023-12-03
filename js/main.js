// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.querySelector('.apod-flexbox');

// const mainInputForm = document.querySelector('form');

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

// page favoite info
const favParentUl = document.querySelector('.appendingFavoritePlanetsParent');

const $form = document.querySelector('.form-planet-finder');

// $form.addEventListener('submit' , () => {
//   e.preventDefault()

// })

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

    imgElement.className = 'd-block rounded planet_img_api rounded';
    // imgElement.height = '200';

    const favoritePlanetsCall = document.createElement('div');
    favoritePlanetsCall.className = 'favoritePlanets bottomForm';

    const $imageColumn = document.createElement('div');

    console.log($imageColumn);
    // This A tag will wrap around the img tag and show the image as a lightbox
    const lightbox = document.createElement('a');
    lightbox.setAttribute('data-lightbox', 'cases');
    lightbox.className = ' CSS_styled_lightbox_cursor';

    $imageColumn.appendChild(lightbox);

    // Main Content
    // Linking it to open the lightbox to the xhr image
    lightbox.setAttribute(
      'href',
      xhr.response.collection.items[randomNum].links[0].href,
    );

    favoritePlanetsCall.appendChild($imageColumn);
    // Setting the current images content in the lightbox

    xhr.response.collection.items[randomNum].data.forEach((inside_data) => {
      lightbox.setAttribute(
        'data-title',
        `${inside_data.title}
      <span class='d-block'>Center:${inside_data.center}</span>
      <span class='d-block'>Date created: ${inside_data.date_created}</span>
      <span class='d-block'>Date created: ${inside_data.description}</span>
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

    headerDescribe.className = 'header_Img_ttl text-left';
    headerDescribe.textContent =
      xhr.response.collection.items[randomNum].data[0].title;

    // Getting the para/info about the image - p

    const paraDescribe = document.createElement('p');

    paraDescribe.className = 'para_img_ttl img_des_min_w p-3';
    paraDescribe.textContent = `${xhr.response.collection.items[randomNum].data[0].description}

     `;

    console.log(xhr.response.collection.items[randomNum].data[0]);

    console.log(xhr.response.collection.items[randomNum].data);

    const header_title = document.querySelector('.header_Img_ttl');
    const image_description = document.querySelector('.para_img_ttl');

    if (header_title) {
      header_title.remove();
    }
    if (image_description) {
      image_description.remove();
    }
    // );

    const $textColumn = document.createElement('div');

    $textColumn.appendChild(headerDescribe);
    $textColumn.appendChild(paraDescribe);

    favoritePlanetsCall.appendChild($textColumn);

    // info ending

    // Creation of the small star favorite

    const star = document.querySelector('.fa-star');

    const starMaker = document.createElement('i');
    starMaker.className = 'fas fa-star fs-4 m-auto text-center d-block fs-3';
    $imageColumn.appendChild(starMaker);

    // star query if statment clause
    if (star) {
      star.remove();
    }

    // Creation of the view entries(sun img) and the modal delete(black hole) buttons

    // wrapping the imgs in a flex div
    const view_imgs_LS_flexer = document.createElement('div');
    view_imgs_LS_flexer.className = 'img_system_flexer';

    // apending to parent div
    favoritePlanetsCall.appendChild(view_imgs_LS_flexer);

    const sunViewLs = document.createElement('img');
    sunViewLs.classList.add('sunView');
    sunViewLs.setAttribute('src', './images/sunSmall.png');
    sunViewLs.setAttribute('alt', 'View_favorite_planets_button');
    // console.log(sunViewLs)

    view_imgs_LS_flexer.appendChild(sunViewLs);

    // black hole img creation
    const delImg = document.createElement('img');

    delImg.className = 'delete_hole';
    delImg.setAttribute('src', './images/black_hole_spinner.png');
    delImg.setAttribute('alt', 'Delete_favorite_planets_button');
    // console.log(delImg)

    view_imgs_LS_flexer.appendChild(delImg);

    const black_hole_remove = document.querySelector('.delete_hole');

    // calling/creating the black hole once
    if (black_hole_remove) {
      black_hole_remove.remove();
    }

    starMaker.addEventListener('click', (e) => {
      e.preventDefault();
      // Adding classes to the stars
      starMaker.classList.add('starColor');
      starMaker.classList.add('starPointer');

      // LocalStorage call
      const planetStorage = {
        entryPlanet: data.nextEntryId,
        planetsInput: e.target.elements.text.value,
      };
      data.nextEntryId++;

      data.entries.unshift(planetStorage);

      $form.reset();

      // functions call/utilization
      // Creating the LI/UL DOM tree w renderEntry
      renderEntry();
      // Calling/utilizing the viewSwap function to favorites page
      viewSwap('favorites');
    });
  });

  xhr.send();
});

const favoritesView = document.querySelector('[data-view="favorites"]');
const entriesView = document.querySelector('[data-view="entries"]');

const entriesTop = document.querySelector('.topForm');

// // entries is whole form/swapping the entries
function viewSwap(entries) {
  if (entries === 'entries') {
    entriesView.classList.remove('hidden');
    favoritesView.classList.add('hidden');

    // entry-form is the entry on top
  } else if (entries === 'favorites') {
    entriesView.classList.add('hidden');
    favoritesView.classList.remove('hidden');
  }
}

// my DOM tree favorite lists collection list

function renderEntry() {
  // create the li element dom tree

  // div element creation

  const $planetFavUl = document.createElement('ul');
  $planetFavUl.className = 'm-auto text-center unordered';
  // div 2 creation

  // const $li1 = document.createElement('div');
  // $li1.className = 'text-center';

  // img element creation

  const $planetMainImgAPI = document.createElement('img');
  $planetMainImgAPI.setAttribute(
    'src',
    'https://www.sherdog.com/image_crop/200/300/_images/fighter/20140911080402_1MG_4005.JPG',
  );
  $planetMainImgAPI.classList.add('planetImgStyles');
  $planetMainImgAPI.setAttribute('alt', 'img_from_Dom');

  // p one element creation
  const $h1 = document.createElement('p');
  $h1.className = 'bold appnedHtwo';
  $h1.textContent = 'here is a paragraph';

  // p two element creation
  const $p2 = document.createElement('i');
  $p2.className = 'fas fa-pencil';

  // appending to the DOM with appendChild

  favParentUl.appendChild($planetFavUl);
  favParentUl.appendChild($planetMainImgAPI);
  favParentUl.appendChild($h1);
  favParentUl.appendChild($p2);

  //  returrns the li element with all the dom nodes/creation

  return favParentUl;
}
