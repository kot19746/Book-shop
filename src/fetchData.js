export function fetchData(data, index){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${data}"&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`)
    .then(respone => respone.json())
    .then(books => books.items);
  }