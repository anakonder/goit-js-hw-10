import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const cardBox = document.querySelector(".cat-info");
const selectList = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

function catImg(id) {
  return fetchCatByBreed(id)
      .then((information) => {
          resultImg = information;
          console.log(resultImg)
      })
    .catch((error) => console.log(error));
}


function catArray() {
   return fetchBreeds()
     .then((breeds) => renderBreedsSelect(breeds))
     .catch((error) => console.log(error));
}

catArray()

function renderBreedsSelect(breeds) {
  const markup = breeds
    .map((breed) => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join("");
    selectList.innerHTML = markup;
}

export { renderBreedsSelect };