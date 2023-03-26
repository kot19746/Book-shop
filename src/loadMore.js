import { bookRender } from "./bookRender"
import { fetchData } from "./fetchData"

export function loadMore(button, currentCategory, startIndex, place, cart) {
    button.addEventListener('click', () => {
        startIndex += 6;
    
        fetchData(currentCategory, startIndex)
        .then(data => bookRender(place, data, cart));
    })
}