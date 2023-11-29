// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.getElementById('apod-flexbox');

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
    console.log(xhr.status);
    console.log(xhr.response);

    const createImgTag = document.createElement('img');
    createImgTag.setAttribute('src', xhr.response.hdurl);
    // createImgTag.setAttribute('title', xhr.response.explanation)
    createImgTag.className = 'stretchedAPODimg rounded m-1';
    apodImg.appendChild(createImgTag);
  });

  xhr.send();
}

apodImgMain();
