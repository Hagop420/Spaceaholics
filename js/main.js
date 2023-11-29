// API Key global access
const apiKey = '3SfbrMVgduWdKtr1Aecz7Z8dMSYKkAWTejCvL0av';

const apodImg = document.getElementById('apod-flexbox');

// // APOD image explanation
const apodImgTitle = document.querySelector('.space-APOD-content h2');
const apodImgPara = document.querySelector('.space-APOD-content p');
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
    console.log(xhr.status);
    console.log(xhr.response);

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
    console.log(xhr.status);
    console.log(xhr.response);

    //  Make a text node and insert content of API/Getting the AJAX title
    const ttlNode = xhr.response.title;
    apodImgTitle.textContent = ttlNode;
    console.log(apodImgTitle);

    //  Make a text node and insert content of API/Getting the AJAX Paragraph
    const paraNode = xhr.response.explanation;
    apodImgPara.textContent = paraNode;

    // giving the text some padding/margin
    apodImgPara.className = 'p-1';
    console.log(apodImgTitle);

    //  Make a text node and insert content of API/Getting the AJAX Paragraph Copyright accessibility
    const paraNodeCopyright = xhr.response.copyright;
    const paraNodeCopyrightDate = xhr.response.date;

    apodImgcopyrightClaims.className = 'float-end';
    apodImgcopyrightClaims.textContent = `© Copyright ${xhr.response.date}`;
  });

  xhr.send();
}

apodImgExplanation();
