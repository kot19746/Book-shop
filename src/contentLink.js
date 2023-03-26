export function contentLink(element){
    const listLinkContent = element.children;

    for (let i = 0; i < listLinkContent.length; i++) {
        listLinkContent[i].classList.remove('production-categories-list-link-active')
    }
}