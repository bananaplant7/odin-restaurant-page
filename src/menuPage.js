import Shawarma from './images/menu/shawarma.jpg';
import Falafel from './images/menu/falafel.jpg';
import Baklava from './images/menu/baklava.jpg';
import Kebab from './images/menu/poop-kebab.png';
import WaterSausage from './images/menu/water-sausage.png';
import Hummus from './images/menu/hummus.jpg';




function menuPage() {
    // create menuPage div
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    // create menu container & menu items
    const menuContainer = document.createElement('div');

    const menuItem1 = document.createElement('div');
    const menuItem1Name = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem2Name = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem3Name = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuItem4Name = document.createElement('div');
    const menuItem5 = document.createElement('div');
    const menuItem5Name = document.createElement('div');
    const menuItem6 = document.createElement('div');
    const menuItem6Name = document.createElement('div');

    // add classes
    menuContainer.classList.add('menuContainer');

    menuItem1.classList.add('menuItem');
    menuItem1Name.classList.add('menuItemName');
    menuItem2.classList.add('menuItem');
    menuItem2Name.classList.add('menuItemName');
    menuItem3.classList.add('menuItem');
    menuItem3Name.classList.add('menuItemName');
    menuItem4.classList.add('menuItem');
    menuItem4Name.classList.add('menuItemName');
    menuItem5.classList.add('menuItem');
    menuItem5Name.classList.add('menuItemName');
    menuItem6.classList.add('menuItem');
    menuItem6Name.classList.add('menuItemName');

    // add text & images to menu items
    menuItem1Name.textContent = 'Shawarma';
    menuItem1.appendChild(menuItem1Name);
    const shawarma = new Image();
    shawarma.src = Shawarma;
    menuItem1.appendChild(shawarma);

    menuItem2Name.textContent = 'Falafel';
    menuItem2.appendChild(menuItem2Name);
    const falafel = new Image();
    falafel.src = Falafel;
    menuItem2.appendChild(falafel);

    menuItem3Name.textContent = 'Baklava';
    menuItem3.appendChild(menuItem3Name);
    const baklava = new Image();
    baklava.src = Baklava;
    menuItem3.appendChild(baklava);

    menuItem4Name.textContent = 'Kebab';
    menuItem4.appendChild(menuItem4Name);
    const kebab = new Image();
    kebab.src = Kebab;
    menuItem4.appendChild(kebab);

    menuItem5Name.textContent = 'Water Sausage';
    menuItem5.appendChild(menuItem5Name);
    const waterSausage = new Image();
    waterSausage.src = WaterSausage;
    menuItem5.appendChild(waterSausage);

    menuItem6Name.textContent = 'Hummus';
    menuItem6.appendChild(menuItem6Name);
    const hummus = new Image();
    hummus.src = Hummus;
    menuItem6.appendChild(hummus);


    // append menu items to menu container & menu container to menuPage
    menuContainer.appendChild(menuItem1)
    menuContainer.appendChild(menuItem2)
    menuContainer.appendChild(menuItem3)
    menuContainer.appendChild(menuItem4)
    menuContainer.appendChild(menuItem5)
    menuContainer.appendChild(menuItem6)

    menuPage.appendChild(menuContainer);

    return menuPage;
}

export { menuPage };