// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.getElementById('apod-flexbox');

// // APOD image explanation
// const apodImgTitle = document.querySelector('.space-APOD-content h2');
// const apodImgPara = document.querySelector('.space-APOD-content p');

// call parent to create dom elements
const explanatons = document.querySelector('.space-APOD-content');

const apodImgcopyrightClaims = document.querySelector(
  '.space-APOD-content > p.copyright',
);

// APOD Main Img AJAX Call
function apodImgMain() {
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
    true,
  );
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const createImgTag = document.createElement('img');
    createImgTag.setAttribute('src', xhr.response.hdurl);
    createImgTag.className = 'stretchedAPODimg rounded m-1';
    apodImg.appendChild(createImgTag);
  });

  xhr.send();
}

apodImgMain();

function apodImgExplanation() {
  // API request creation with XMLHTTPrequest
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
    true,
  );
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    // Creating h2 element for the APOD image
    const h2Creation = document.createElement('h2');
    h2Creation.className = 'appendingAPODpara';
    h2Creation.textContent = xhr.response.title;
    explanatons.appendChild(h2Creation);

    // creating the paragraph explaanation for my APOD image
    const paraCreation = document.createElement('p');
    paraCreation.className = 'APOD_explanation m-2';
    paraCreation.textContent = xhr.response.explanation;
    explanatons.appendChild(paraCreation);

    // creating the copyright footer/P element for my APOD image
    const copyrightText = document.createElement('p');
    copyrightText.className = 'copyright float-end';
    copyrightText.textContent = `© Copyright ${xhr.response.date}`;
    explanatons.appendChild(copyrightText);
  });

  xhr.send();
}

apodImgExplanation();
