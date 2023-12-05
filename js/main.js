// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.querySelector('.apod-flexbox');

// entries swapping button on favorites view
const swapPlanes = document.querySelector('.swapEntries')

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
const $form = document.querySelector('.form-planet-finder');

// page favoite info
const favParentUl = document.querySelector('.appendingFavoritePlanetsParent');

const unordered = document.querySelector('.unordered')

// favorites tab new button
const $NEW = document.querySelector('.new_js')


const mobile_link_tag = document.querySelector('.mobile_link_tag')
const favorites_img_ttl = document.querySelector('.API_img_title')
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

    const sunOnce = document.querySelector('.sunView')
    const sunViewLs = document.createElement('img');
    sunViewLs.classList.add('sunView');
    sunViewLs.setAttribute('src', './images/sunSmall.png');
    sunViewLs.setAttribute('alt', 'View_favorite_planets_button');
    // console.log(sunViewLs)

    view_imgs_LS_flexer.appendChild(sunViewLs);

    // black hole img creation
    const delImg = document.createElement('img');

    const black_hole_remove = document.querySelector('.delete_hole');

    delImg.className = 'delete_hole';
    delImg.setAttribute('src', './images/black_hole_spinner.png');
    delImg.setAttribute('alt', 'Delete_favorite_planets_button');
    // console.log(delImg)

    // calling/creating the black hole once
    if (black_hole_remove) {
      black_hole_remove.remove();
    }
    if (sunOnce) {
      sunOnce.remove();
    }

    // appending the black hole img to the div
    view_imgs_LS_flexer.appendChild(delImg);




//  // image query API
//         const img = document.querySelector('.planet_img_api');

//         const APIimgTtl = document.querySelector('.header_Img_ttl');

//    // LocalStorage call
//       const planetStorage = {
//         entryPlanet: data.nextEntryId,
//         entryPlanetTitle: APIimgTtl.textContent,
//         planetsInput: img.src
//       };










starMaker.addEventListener('click', (e) => {
  // // image query API

  const img = document.querySelector('.planet_img_api');
  const APIimgTtl = document.querySelector('.header_Img_ttl');

      e.preventDefault();

      // Adding classes to the stars
      starMaker.classList.add('starColor');
      starMaker.classList.add('starPointer');

      // LocalStorage call
      const planetStorage = {
        entryPlanet: data.nextEntryId,
        entryPlanetTitle: APIimgTtl.textContent,
        planetsInput: img.src
      };

      // editing
      // main statment conditional

      unordered.prepend(planetStorage)


      // Calling/utilizing the viewSwap function to favorites page
      renderEntry(planetStorage)
      viewSwap('favorites');
    })




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

function renderEntry(entry) {

 const $liCreation = document.createElement('li');
  $liCreation.className = 'row_inner';

  // div element creation

  const $div = document.createElement('div');
  $div.className = 'm-3 column-full';
  // div 2 creation

  const $lightbox_maker = document.createElement('a');
$lightbox_maker.setAttribute('href' , entry.planetsInput)
$lightbox_maker.setAttribute('data-lightbox' , 'cases')

  const $h3 = document.createElement('h3');
  $h3.className = ' fav_ttl text-center'
  $h3.textContent = 'content title'
  // $h3.textContent = entry.entryPlanetTitle


  const $wrapped = document.createElement('div');
$wrapped.className = 'd-flex divWrap'


  const $pencilIcon = document.createElement('i');
$pencilIcon.className = 'fas fa-pencil'
  // img element creation

  const $imgDomTree = document.createElement('img');
  $imgDomTree.setAttribute('src', entry.planetsInput);
  $imgDomTree.setAttribute('alt', 'img_from_Dom');

  // appending the ApiImg to the lightbox
  console.log($lightbox_maker.appendChild($imgDomTree))


  // appending to the DOM with appendChild

  unordered.appendChild($liCreation)
  $liCreation.appendChild($div);
  $liCreation.appendChild($wrapped)
  $wrapped.appendChild($h3);
  $wrapped.appendChild($pencilIcon);
  // lightbox here
  $div.appendChild($lightbox_maker);



  //  returrns the li element with all the dom nodes/creation


  return $liCreation;

}

// viewSwap('favorites')




// console.log(mobile_link_tag)





// swapping views

swapPlanes.addEventListener('click', () => {
  viewSwap('entries')

});
$NEW.addEventListener('click', () => {
  viewSwap('entries')

});

// viewSwap('favorites')
