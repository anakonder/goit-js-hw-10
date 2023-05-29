import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const cardBox = document.querySelector(".cat-info");
const selectList = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

catArray()

selectList.addEventListener("change", () => {
  catId = selectList.value;
  catImg(catId);
  console.log(catImg)
});


function catImg(id) {
  return loader.classList.remove('unvisible'),
    fetchCatByBreed(id)
      .then((information) => {
        const resultImg = information
        const imgObject = resultImg[0]
        const imgSrc = imgObject.url
        console.log(imgSrc)
        renderBreedsCard(imgSrc)
        
      })
      .catch((error) => console.log(error))
      .finally(() => loader.classList.add('unvisible'));
}


function catArray() {

  return loader.classList.remove('unvisible'),
  
    fetchBreeds()
      
      .then((breeds) => {
        renderBreedsSelect(breeds);
        selectList.classList.remove('unvisible')
      })
      .catch((error) => console.log(error))
      .finally(() => loader.classList.add('unvisible'));
}


function renderBreedsSelect(breeds) {
  // console.log(breeds)
  const markup = breeds
    .map((breed) => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join("");
  selectList.innerHTML = markup;
    
}


function renderBreedsCard(breedImg) {
  return cardBox.innerHTML = `<img
  src=${breedImg}
  alt="cat"
  width="300"
 />`
}

export { renderBreedsSelect };