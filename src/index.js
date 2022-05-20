import './style.css';
import { homePage } from './homePage';

const content = document.getElementById('content');

function header() {
    // create all header elements
    const headerContainer = document.createElement('div');
    const restaurantName = document.createElement('h2');
    const tabsContainer = document.createElement('nav');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    // add classes & ids to header elements
    headerContainer.classList.add('headerContainer')
    restaurantName.classList.add('restaurantName')
    tabsContainer.classList.add('tabsContainer')
    homeTab.id = 'homeTab'
    menuTab.id = 'menuTab'
    contactTab.id = 'contactTab'
    
    // add text content to header elements
    restaurantName.textContent = 'Turkish Kebab House'
    homeTab.textContent = 'Home'
    menuTab.textContent = 'Menu'
    contactTab.textContent = 'Contact'

    // append tabs to tab container
    tabsContainer.appendChild(homeTab);
    tabsContainer.appendChild(menuTab);
    tabsContainer.appendChild(contactTab);

    // append restaurant name & tab container to header container
    headerContainer.appendChild(restaurantName);
    headerContainer.appendChild(tabsContainer);

    return headerContainer;
}

content.appendChild(header())

content.appendChild(homePage());
