import Kebab from './suad-kamardeen-kebab.jpg';

function homePage() {
    // create div
    const element = document.createElement('div');
    element.id = 'home';

    // add img to div
    const kebab = new Image();
    kebab.src = Kebab;
    element.appendChild(kebab);



    return element;
}

export { homePage };