export function putInBag(item, cart){
    cart[item] = true;
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}