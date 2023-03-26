import '../styles/style.css';
import { bookRender } from "./bookRender";
import { contentLink } from "./contentLink";
import { fetchData } from "./fetchData";
import { loadMore } from "./loadMore";
import { enleveLivre } from "./enleveLivre";
import { bannerSlider } from "./slider";
bannerSlider();

const loadButtonPlace = document.querySelector('.load-more-button'); 
let loadButton = null; 
const listOfbooks = document.querySelector('.book');
const prodCategoryList = document.querySelector('.production-categories-list');
let choisedCategoryItem = '';
let activeCategory = null;
let startIndex = 0;
const book = {};

prodCategoryList.addEventListener('click', (e) => {
  enleveLivre(listOfbooks)
  contentLink(prodCategoryList)

  if (loadButton) {
    loadButton.remove(); 
  }
  
  if (e.target.classList.contains('production-categories-list-link')) {
    
    choisedCategoryItem = e.target.textContent;
    activeCategory = e.target;
    activeCategory.classList.add('production-categories-list-link-active');

    loadButton = document.createElement('button');
    loadButton.innerHTML = "LOAD MORE";
        loadButton.style.fontFamily = "Montserrat";
        loadButton.style.width = "175px";
        loadButton.style.height = "57px";
        loadButton.style.display = 'flex';
        loadButton.style.margin = "50px 0 50px 25%";
        loadButton.style.justifyContent = 'center';
        loadButton.style.paddingTop = "20px";
        loadButton.style.textAlign = "center";
        loadButton.style.backgroundColor = "#fff";
        loadButton.style.borderStyle = "solid";
        loadButton.style.borderColor = "#4C3DB2";
        loadButton.style.cursor = "pointer";
        loadButton.style.color = "#4C3DB2"; 
        loadButton.style.opacity = "70%";
    loadButtonPlace.appendChild(loadButton);

    fetchData(choisedCategoryItem, startIndex)
    .then(bookItems => bookRender(listOfbooks, bookItems, book))
    .catch(error => console.log(error));

    loadMore(loadButton, choisedCategoryItem, startIndex, listOfbooks, book);
  }
})
prodCategoryList.firstElementChild.click();