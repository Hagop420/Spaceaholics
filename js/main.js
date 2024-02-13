// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.querySelector('.apod-flexbox');

// entries swapping button on favorites view
const swapPlanes = document.querySelector('.swapEntries');

// const mainInputForm = document.querySelector('form');

// // APOD image explanation
// const apodImgTitle = document.querySelector('.space-APOD-content h2');
// const apodImgPara = document.querySelector('.space-APOD-content p');

// call parent to create dom elements
const explanatons = document.querySelector('.space-APOD-content');

const $barTtl = document.querySelector('.planetBar > h3');

const apodImgcopyrightClaims = document.querySelector(
  '.space-APOD-content > p.copyright',
);

const planetImagesCall = document.querySelector('.AJAX-planet-image');

const $nullMsg = document.querySelector('.nullMsg');

$barTtl.style.cursor = 'pointer';
$barTtl.addEventListener('click', () => {
  viewSwap('entries');
});
$barTtl.addEventListener('mouseover', () => {
  $barTtl.style.opacity = '.8';
});
$barTtl.addEventListener('mouseout', () => {
  $barTtl.style.opacity = '1';
});
// classes for the form element
// // Font awesome magnifying glass
const magnifying_glass = document.querySelector('.fa-magnifying-glass');

magnifying_glass.classList.add('fa-magnifying-glass');
magnifying_glass.classList.add('fa-solid');
// magnifying_glass.classList.add('m-1');
magnifying_glass.classList.add('rounded');

magnifying_glass.addEventListener('click', () => {
  data.nextEntryId++;
});

const glassBtn = document.querySelector('.span_icon_glass');
const $form = document.querySelector('.form-planet-finder');
const $btn_title_bar = document.querySelector('.btnPadd');

// page favoite info
const favParentUl = document.querySelector('.appendingFavoritePlanetsParent');

const unordered = document.querySelector('.unordered');

// favorites tab new button
const $NEW = document.querySelector('.new_js');

const $modal_open = document.querySelector('.modal-container');
const $modal_content = document.querySelector('.modal-content');
const $modal_button_yes = document.querySelector('.modal-button-confirm');
const $modal_button_no = document.querySelector('.modal-deny');
const $modal_font = document.querySelector('.modal-font');

const mobile_link_tag = document.querySelector('.mobile_link_tag');
const favorites_img_ttl = document.querySelector('.API_img_title');

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

// to stop the video
function stopVideo(element) {
  // getting the iframe from the body
  var iframe = element.querySelector('.ifNan');

  // check if the iframe exists before trying to manipulate it
  if (iframe !== null) {
    // reinitializing the value of the src attribute to stop the YouTube video
    var temp = iframe.src;
    iframe.src = temp;
  }
}

function stopVideoTwo(element) {
  // getting the iframe from the body
  var iframe = document.querySelector('.pause_first');

  // check if the iframe exists before trying to manipulate it
  if (iframe !== null) {
    // reinitializing the value of the src attribute to stop the YouTube video
    var temp = iframe.src;
    iframe.src = temp;
  }
}

// pause the video functions

document.querySelector('.vidTtl').addEventListener('click', function () {
  // Assuming 'body' is the parent element containing the iframe
  var body = document.body;
  stopVideo(body);
});
document.querySelector('.swapEntries').addEventListener('click', function () {
  // Assuming 'body' is the parent element containing the iframe
  var body = document.body;
  stopVideo(body);
});
document.querySelector('.swapEntries').addEventListener('click', function () {
  // Assuming 'body' is the parent element containing the iframe
  var body = document.body;
  stopVideo(body);
});
document.querySelector('.cosmos_man').addEventListener('click', function () {
  // Assuming 'body' is the parent element containing the iframe
  viewSwap('entries');
  var body = document.body;
  stopVideo(body);
});
document.querySelector('.new_js').addEventListener('click', function () {
  // Assuming 'body' is the parent element containing the iframe
  var body = document.body;
  stopVideo(body);
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    stopVideoTwo();
  }
});

$btn_title_bar.addEventListener('click', () => {
  viewSwap('favorites');
  toggleEntries();
  const faPencil = document.querySelectorAll('.fa-pencil');

  //  calling the fa pencil functionallity here
  faPencil.forEach((pen) => {
    pen.addEventListener('click', (event) => {
      viewSwap('entries');

      while (planetImagesCall.firstChild) {
        planetImagesCall.firstChild.remove();
      }

      // document.querySelector('.planet_img_api').src = xhr.response.collection.items[e.target].links

      const divWrap = event.target.closest('.divWrap');

      const planetText = divWrap.children[0].textContent;

      // planet text goes here

      for (let i = 0; i < data.entries.length; i++) {
        if (data.entries[i].entryPlanetTitle === planetText) {
          data.editing = data.entries[i];
        }
      }
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', data.editing.planetsInput);

      imgElement.className = 'd-block rounded planet_img_api rounded';

      const favoritePlanetsCall = document.createElement('div');
      favoritePlanetsCall.className = 'favoritePlanets bottomForm';

      const $imageColumn = document.createElement('div');

      $imageColumn.appendChild(imgElement);

      favoritePlanetsCall.appendChild($imageColumn);

      planetImagesCall.appendChild(favoritePlanetsCall);

      const headerDescribe = document.createElement('h3');

      headerDescribe.className = 'header_Img_ttl text-left';
      headerDescribe.textContent = data.editing.entryPlanetTitle;

      // Getting the para/info about the image - p

      const paraDescribe = document.createElement('p');

      paraDescribe.className = 'para_img_ttl img_des_min_w p-3';
      paraDescribe.textContent = data.editing.entryPlanet;

      const $textColumn = document.createElement('div');
      $textColumn.classList.add('para_min_min');
      $textColumn.appendChild(headerDescribe);
      $textColumn.appendChild(paraDescribe);

      favoritePlanetsCall.appendChild($textColumn);

      // wrapping the imgs in a flex div
      const view_imgs_LS_flexer = document.createElement('div');
      view_imgs_LS_flexer.className = 'img_system_flexer';

      favoritePlanetsCall.appendChild(view_imgs_LS_flexer);

      // apending to parent div

      const sunViewLs = document.createElement('img');
      sunViewLs.classList.add('sunView');
      sunViewLs.setAttribute('src', './images/sunSmall.png');
      sunViewLs.setAttribute('alt', 'View_favorite_planets_button');

      // // favoritePlanetsCall.appendChild(view_imgs_LS_flexer);
      // favoritePlanetsCall.appendChild(sunViewLs);
      favoritePlanetsCall.appendChild(view_imgs_LS_flexer);
      // view_imgs_LS_flexer.appendChild(sunViewLs);

      $textColumn.appendChild(view_imgs_LS_flexer);
      // view_imgs_LS_flexer.appendChild(sunViewLs);
      // query for sun img
      const sunOnce = document.querySelector('.sunView');
      if (sunOnce) {
        sunOnce.remove();
      }

      sunViewLs.addEventListener('click', () => {
        viewSwap('favorites');
      });
      const delImg = document.createElement('img');

      delImg.className = 'delete_hole';
      delImg.setAttribute('src', './images/black_hole_spinner.png');
      delImg.classList.add('cursor');
      delImg.setAttribute('alt', 'Delete_favorite_planets_button');

      delImg.addEventListener('click', () => {
        document.body.classList.add('overflow_hide');
        $modal_open.className = 'block confirmation overlay';
        $modal_content.className = 'modal-content-inner-center';
        elevatorMusic();

        // end test home
      });
      // query for the black hol

      view_imgs_LS_flexer.appendChild(delImg);
    });
  });

  // end
});

// Calling the Image/Video API

glassBtn.addEventListener('click', () => {
  const img = document.querySelector('.planet_img_api');
  const idOne = document.querySelector('#onceCalled');

  if (idOne) {
    idOne.remove();
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
    favoritePlanetsCall.id = 'onceCalled';

    const $imageColumn = document.createElement('div');

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
    $textColumn.classList.add('para_min_min');
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
    // favoritePlanetsCall.appendChild(view_imgs_LS_flexer);

    $textColumn.appendChild(view_imgs_LS_flexer);

    const sunViewLs = document.createElement('img');
    sunViewLs.classList.add('sunView');
    sunViewLs.setAttribute('src', './images/sunSmall.png');
    sunViewLs.setAttribute('alt', 'View_favorite_planets_button');

    // query for sun img
    const sunOnce = document.querySelector('.sunView');
    console.log(sunViewLs);
    if (sunOnce) {
      sunOnce.remove();
    }
    view_imgs_LS_flexer.appendChild(sunViewLs);

    sunViewLs.addEventListener('click', () => {
      viewSwap('favorites');

      // testing pencil here
      const pencil = document.querySelectorAll('.fa-pencil');

      pencil.forEach((pen) => {
        pen.addEventListener('click', (event) => {
          viewSwap('entries');

          const delImg = document.createElement('img');

          delImg.className = 'delete_hole';
          delImg.setAttribute('src', './images/black_hole_spinner.png');
          delImg.classList.add('cursor');
          delImg.setAttribute('alt', 'Delete_favorite_planets_button');

          // query for the black hole
          const black_hole_remove = document.querySelector('.delete_hole');
          // calling/creating the black hole once
          view_imgs_LS_flexer.appendChild(delImg);

          delImg.addEventListener('click', () => {
            document.body.classList.add('overflow_hide');
            $modal_open.className = 'block confirmation overlay';
            $modal_content.className = 'modal-content-inner-center';
            viewSwap('favorites');
            elevatorMusic();
          });
          if (black_hole_remove) {
            black_hole_remove.remove();
          }

          // document.querySelector('.planet_img_api').src = xhr.response.collection.items[e.target].links[0].href

          const divWrap = event.target.closest('.divWrap');

          const planetText = divWrap.children[0].textContent;

          for (let i = 0; i < data.entries.length; i++) {
            if (data.entries[i].entryPlanetTitle === planetText) {
              data.editing = data;
            }
          }
        });
      });
      // ending testig
    });

    // appending the black hole img to the div
    // view_imgs_LS_flexer.appendChild(delImg);

    starMaker.addEventListener('click', (e) => {
      // // image query API

      const img = document.querySelector('.planet_img_api');
      const APIimgTtl = document.querySelector('.header_Img_ttl');
      const paraObjPl = document.querySelector('.para_img_ttl');

      e.preventDefault();

      // Adding classes to the stars
      starMaker.classList.add('starColor');
      starMaker.classList.add('starPointer');

      // LocalStorage call
      const planetStorage = {
        entryPlanetId: data.nextEntryId,
        entryPlanet: paraObjPl.textContent,
        entryPlanetTitle: APIimgTtl.textContent,
        planetsInput: img.src,
      };

      data.nextEntryId++;
      data.entries.push(planetStorage);

      toggleEntries();
      unordered.prepend(renderEntry(planetStorage));
      viewSwap('favorites');

      const pencil = document.querySelectorAll('.fa-pencil');

      // // backto the views of homepage/entries

      pencil.forEach((pen) => {
        pen.addEventListener('click', (event) => {
          viewSwap('entries');

          const divWrap = event.target.closest('.divWrap');

          const planetText = divWrap.children[0].textContent;

          for (let i = 0; i < data.entries.length; i++) {
            if (data.entries[i].entryPlanetTitle === planetText) {
              data.editing = data.entries[i];
            }
          }

          // planetsInput: img.src;

          // 1st way after we search and we go to another page we can delete what i search 3nd way once pencil is clicked we want the field below the search to be updated

          // black hole img creation
          const delImg = document.createElement('img');

          delImg.className = 'delete_hole';
          delImg.setAttribute('src', './images/black_hole_spinner.png');
          delImg.classList.add('cursor');
          delImg.setAttribute('alt', 'Delete_favorite_planets_button');

          // query for the black hole
          const black_hole_remove = document.querySelector('.delete_hole');
          // calling/creating the black hole once
          view_imgs_LS_flexer.appendChild(delImg);

          // modal opened when black hole clicked functionallity

          delImg.addEventListener('click', () => {
            document.body.classList.add('overflow_hide');
            $modal_open.className = 'block confirmation overlay';
            $modal_content.className = 'modal-content-inner-center';
            elevatorMusic();
          });
          if (black_hole_remove) {
            black_hole_remove.remove();
          }
        });
      });
    });
  });

  xhr.send();
});

const favoritesView = document.querySelector('[data-view="favorites"]');
const entriesView = document.querySelector('[data-view="entries"]');

const entriesTop = document.querySelector('.topForm');

// toggleEntries

function toggleEntries() {
  if (data.entries.length === 0) {
    $nullMsg.classList.remove('hidden');
  } else {
    $nullMsg.classList.add('hidden');
  }
}

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
  toggleEntries();
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
  $lightbox_maker.setAttribute('href', entry.planetsInput);
  $lightbox_maker.setAttribute('data-lightbox', 'cases');
  $lightbox_maker.setAttribute('data-title', entry.entryPlanet);

  // $lightbox_maker.setAttribute('data-title', entry.planetsInput);

  const $h3 = document.createElement('h3');
  $h3.className = ' fav_ttl text-center';
  $h3.textContent = entry.entryPlanetTitle;
  // $h3.textContent = entry.entryPlanetTitle

  const $wrapped = document.createElement('div');
  $wrapped.className = 'd-flex divWrap';

  const $pencilIcon = document.createElement('i');
  $pencilIcon.id = 'main_pencil';
  $pencilIcon.className = 'fas fa-pencil';
  // img element creation

  const $imgDomTree = document.createElement('img');
  $imgDomTree.setAttribute('src', entry.planetsInput);
  $imgDomTree.setAttribute('alt', 'img_from_Dom');

  // appending the ApiImg to the lightbox
  $lightbox_maker.appendChild($imgDomTree);

  // appending to the DOM with appendChild

  // unordered.appendChild($liCreation);
  $liCreation.appendChild($div);
  $liCreation.appendChild($wrapped);
  $wrapped.appendChild($h3);
  $wrapped.appendChild($pencilIcon);
  // lightbox here
  $div.appendChild($lightbox_maker);

  //  returns the li element with all the dom nodes/creation

  return $liCreation;
}

// DOM content Loaded

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const entry = renderEntry(data.entries[i]);
    unordered.appendChild(entry);
  }
  viewSwap(data.view);
  toggleEntries();
});

// swapping views

swapPlanes.addEventListener('click', () => {
  viewSwap('entries');
});

$NEW.addEventListener('click', () => {
  viewSwap('entries');
  $form.reset();
});

// styling the modal

$modal_button_yes.classList.add('btn-sized');
$modal_button_no.classList.add('btn-sized');

$modal_button_yes.classList.add('btn-confirm-styles');
$modal_button_no.classList.add('btn-deny-styles');

$modal_button_yes.addEventListener('mouseover', () => {
  $modal_button_yes.classList.add('scaled');
  $modal_button_yes.classList.add('white-modal-button');
  $modal_button_yes.classList.add('opacity-green');
});
$modal_button_yes.addEventListener('mouseout', () => {
  $modal_button_yes.classList.remove('scaled');
  $modal_button_yes.classList.remove('white-modal-button');
  $modal_button_yes.classList.remove('opacity-green');
});
//  Button custimization's for no in moodal
$modal_button_no.addEventListener('mouseover', () => {
  $modal_button_no.classList.add('scaled');
  $modal_button_no.classList.add('white-modal-button');
  $modal_button_no.classList.add('very-red-denied');
});
$modal_button_no.addEventListener('mouseout', () => {
  $modal_button_no.classList.remove('scaled');
  $modal_button_no.classList.remove('white-modal-button');
  $modal_button_no.classList.remove('very-red-denied');
});

// modal deny/cancel button is clicked

$modal_button_no.addEventListener('click', () => {
  document.body.classList.remove('overflow_hide');
  coolAudtioInplementation();
  $modal_open.className = 'hidden';
});

// Audio function's

const audioPlayWhenButtonIsClicked = new Audio();

function coolAudtioInplementation() {
  audioPlayWhenButtonIsClicked.src =
    'https://www.fesliyanstudios.com/play-mp3/387';
  audioPlayWhenButtonIsClicked.loop = false;
  audioPlayWhenButtonIsClicked.play();
}

// when modal is opnene'd play the elevator music function inplement
function elevatorMusic() {
  audioPlayWhenButtonIsClicked.src =
    'https://dl.vgmdownloads.com/soundtracks/club-penguin-online-unofficial-soundtrack-online-windows-gamerip-2018/tltdklykwt/2-12.%20Pizza%20Parlor.mp3';
  audioPlayWhenButtonIsClicked.loop = true;

  audioPlayWhenButtonIsClicked.play();
}

// $btn_title_bar.addEventListener('click' , () => {
//            viewSwap('favorites')
// })

$modal_button_yes.addEventListener('click', () => {
  const $lis = document.querySelectorAll('li');
  document.body.classList.remove('overflow_hide');
  $modal_open.className = 'hidden';

  // // Audio's here
  audioPlayWhenButtonIsClicked.pause();
  coolAudtioInplementation();

  // Looping through the data entries
  for (let i = 0; i < data.entries.length; i++) {
    if (data.editing.entryPlanetTitle === data.entries[i].entryPlanetTitle) {
      const array = data.entries;
      const elementDelete = array.splice(i, 1);
      data.entries = array;
      unordered.removeChild($lis[i]);
    }
  }
  // Looping and each clicked li is deleted
  for (let i = 0; i < $lis.length; i++) {
    if (data.editing.entryPlanetTitle === $lis[i].entryPlanetTitle) {
      const lis = $lis[i];
      lis.remove();
      break;
    }
  }

  viewSwap('favorites');
  toggleEntries();
  $form.reset();
  data.editing = null;
});
