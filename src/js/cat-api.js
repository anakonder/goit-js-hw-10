import { renderBreedsSelect } from "../index"
const APIKEY = 'live_yLDkUr3dbr9zSfZaJmQrZc8jkq2mgsHyEyNMPqfIALTiwT0FN4h0RODPgtWAcrzr'

function fetchBreeds() {
    return fetch(
        `https://api.thecatapi.com/v1/breeds?${APIKEY}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }


function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/${breedId}?api_key=${APIKEY}&breed_ids=${breedId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}
 
export { fetchBreeds, fetchCatByBreed }

