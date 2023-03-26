import { putInBag } from "./putInBag";
import { outFromLocal } from "./outFromLocal";
import { outFromBag } from "./outFromBag";

let counter = 0
const redPoint = document.querySelector('.bag-span');

export function clickedButton(place, cart) {
    let data = outFromLocal();
     
    function choisedElement(e) {
      const choisedButton = e.target;
      const choisedButtonId = choisedButton.getAttribute('data-id');
      
      if (!cart[choisedButtonId]) {
        putInBag(choisedButtonId, cart);
        choisedButton.textContent = "in the cart";
        choisedButton.classList.add('book-description-in-backet-active');
        counter++;

        redPoint.innerHTML = counter;
        redPoint.style.display = 'flex';
        redPoint.style.alignItems = "center";
        redPoint.style.justifyContent = 'center';
        redPoint.style.width = "15px";
        redPoint.style.height = "15px";
        redPoint.style.marginTop = '10px';
        redPoint.style.marginLeft = '-55px';
        redPoint.style.borderRadius = "10px";
        redPoint.style.background = "#ff0000";
        redPoint.style.color = "#ffffff";
        
      } else {
        outFromBag(choisedButtonId, cart);
        choisedButton.textContent = "Buy now";
        choisedButton.classList.remove('book-description-in-backet-active');
        counter--;
        (counter > 0) ? redPoint.style.display = 'flex' : redPoint.style.display = 'none';
        redPoint.innerHTML = counter;
      }
  
      if (data[choisedButtonId]){
        outFromBag(choisedButtonId);
        choisedButton.classList.remove('book-description-in-backet-active');
      } 
    }
  
    if (place.onclick) {
      place.removeEventListener('click', place.onclick);
    }
    place.onclick = choisedElement;
  }
  