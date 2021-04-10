//import API_TOKEN from '../Helpers/token'
const API_TOKEN = "3a1ddb270464092aa96f61c3655bc92f";

export function getFilmFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))

}
export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}