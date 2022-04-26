const apiKey = 'd658952d-8831-4d43-a57f-897158369b77'
const fetchOptions = {
  'Headers': {
    "x-api-key": apiKey
  }
}

// Get array of all breeds from API
function getAllBreeds() {
  let url = 'https://api.thedogapi.com/v1/breeds/';

  return fetch(url, fetchOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Set breedList variable to result of fetch
      breedList = data;
    });
}

// Get a random breed from the list
function getRandomBreed() {
  let randomNumber = Math.floor(Math.random() * breedList.length);
  return breedList[randomNumber];
}

function displayBreedInfo(breed) {
  // Console log to test that breed parameter was passed
  console.log('displaying breed', breed);

  // Display breed name on page
  selectedBreed.innerHTML = `
  <img src="${breed.image.url}">
  <h3>${breed.name}</h3>
  <p>${breed.id}</p>
  `;
}

function displayRandomBreed() {
  let randomBreed = getRandomBreed();
  displayBreedInfo(randomBreed);
}

// global breedList variable to hold result of fetch
let breedList = [];
getAllBreeds()
  .then(() => { displayRandomBreed(); });

// Add event listener to button to show random breed
const randomizeButton = document.querySelector('#randomize-breed');

randomizeButton.addEventListener('click', () => {
  displayBreedInfo(getRandomBreed());
});

const selectedBreed = document.querySelector('#selected-breed');
console.log(selectedBreed);
