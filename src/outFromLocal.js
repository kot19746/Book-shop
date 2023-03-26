export function outFromLocal(){
    const response = localStorage.getItem('shoppingCart')
    const data = JSON.parse(response);
    return data;
}  