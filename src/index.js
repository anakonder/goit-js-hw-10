import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const cardBox = document.querySelector(".cat-info");
const selectList = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const errorMessege = document.querySelector(".error");

errorMessege.classList.add('unvisible')

catArray()


selectList.addEventListener("change", () => {
  const catId = selectList.value;
  console.log(catId)
  catImg(catId);
  // console.log(catImg)
});


function catImg(id) {
  loader.classList.remove('unvisible'),
  fetchCatByBreed(id)
    .then((information) => {
    // console.log(information)
    const resultImg = information
    const imgObject = resultImg.breeds[0]
    console.log(resultImg)
    const imgSrc = resultImg.url
    renderBreedsCard(imgSrc, imgObject)
    
  })
  .catch((error) => {
    console.log(error);
    errorMessege.classList.remove('unvisible');
    selectList.classList.add('unvisible');
    
  })
  .finally(() => loader.classList.add('unvisible'));
}


function catArray() {
  
   loader.classList.remove('unvisible'),
  
  fetchBreeds()
  
  .then((breeds) => {
    // throw new Error(console.log('ERROR'))
    console.log(breeds)
    renderBreedsSelect(breeds);
    selectList.classList.remove('unvisible')
  })
    .catch((error) => {
      console.log(error);
      errorMessege.classList.remove('unvisible');
      selectList.classList.add('unvisible');
      
    })
      .finally(() => loader.classList.add('unvisible'));
}


function renderBreedsSelect(breeds) {
 
  const markup = breeds
    .map((breed) => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join("");
  selectList.innerHTML = markup;
    
}


function renderBreedsCard(breedImg, object) {
  return cardBox.innerHTML = `<img
  src=${breedImg}
  alt="cat"
  width="300"
 /><div class="text-content">
   <h2 class="title-breed">${object.name}</h2>
   <p class="breed-desc">${object.description}</p>
   <p class="breed-temperament"><b>Temperament</b> ${object.temperament}</p>
 </div>`
}

export { renderBreedsSelect };