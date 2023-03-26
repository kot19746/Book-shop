import { outFromLocal } from "./outFromLocal";
import { clickedButton } from "./bagPoint";

export function bookRender(place, data, cart){
  const itemOutOfLocal = outFromLocal();

    data.forEach(item => {
        const aboutBook = document.createElement('div');
        if(itemOutOfLocal) {
        aboutBook.innerHTML = `
          <div class="book-image"><img src="${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "/images/placeholder.jpg"}"></div>
          <div class="book-description">
          <br>
            <div class="book-author">${item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : 'Authors not found'}</div>
            <div class="book-title"><h1>${item.volumeInfo.title}</h1></div>
            <div class="book-rating">${item.volumeInfo.rating}</div>
            <div class="book-text">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + "..." : "Description not found"}</div>
            <br>
            <div class="book-price"><h2>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode : " "}</h2></div>
            <br>
            <div class="book-button"><button data-id =${item.id} class="book-description-in-backet${(itemOutOfLocal[item.id]) ? ' book-description-in-backet-active' : ''}">${(itemOutOfLocal[item.id]) ? 'in the cart' : 'Buy now'}</button></div>
          </div>
        `
        aboutBook.style.display = "grid";
        aboutBook.style.gridTemplateColumns = "1fr 1fr";
        aboutBook.style.margin = "30px 20px";
        aboutBook.style.maxWidth = "1120px";
        aboutBook.style.maxHeight = "300px";

      } else{
        aboutBook.innerHTML = `
        <div class="book-image"><img src="${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "/images/placeholder.jpg"}"></div>
        <div class="book-description">
        <br>
          <div class="book-author">${item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : 'Authors not found'}</div>
          <div class="book-title"><h1>${item.volumeInfo.title}</h1></div>
          <div class="book-rating">${item.volumeInfo.rating}</div>
          <div class="book-text">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + "..." : "Description not found"}</div>
          <br>
          <div class="book-price"><h2>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + " " + item.saleInfo.listPrice.currencyCode : " "}</h2></div>
          <br>
          <div class="book-button"><button class="book-description-in-backet">Buy now</button></div>
        </div>
        `
      }
        place.appendChild(aboutBook)
    })
    
    clickedButton(place, cart);
}