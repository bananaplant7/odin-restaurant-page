import Contact1Image from './images/contact/contact1.jpg';
import Contact2Image from './images/contact/contact2.jpg';

function contactPage() {
    // create contactPage div
    const contactPage = document.createElement('div');
    contactPage.classList.add('contactContainer');

    // make the stuff
    const contact1 = document.createElement('div');
    const contact1Info = document.createElement('div');
    const contact1Name = document.createElement('p');
    const contact1Phone = document.createElement('p');
    const contact1Email = document.createElement('p');

    const contact2 = document.createElement('div');
    const contact2Info = document.createElement('div');
    const contact2Name = document.createElement('p');
    const contact2Phone = document.createElement('p');
    const contact2Email = document.createElement('p');


    // add classes to stuff
    contact1.classList.add('contact');
    contact1Info.classList.add('contactInfo');

    contact2.classList.add('contact');
    contact2Info.classList.add('contactInfo');


    // add content to stuff
    const contact1Image = new Image();
    contact1Image.src = Contact1Image;
    contact1Name.textContent = 'Bob';
    contact1Phone.textContent = '123-456-789';
    contact1Email.textContent = 'bob@email.com';

    const contact2Image = new Image();
    contact2Image.src = Contact2Image;
    contact2Name.textContent = 'Alice';
    contact2Phone.textContent = '123-456-789';
    contact2Email.textContent = 'alice@email.com';

    // append stuff 
    contact1Info.appendChild(contact1Name);
    contact1Info.appendChild(contact1Phone);
    contact1Info.appendChild(contact1Email);
    contact1.appendChild(contact1Image);
    contact1.appendChild(contact1Info);
    contactPage.appendChild(contact1);

    contact2Info.appendChild(contact2Name);
    contact2Info.appendChild(contact2Phone);
    contact2Info.appendChild(contact2Email);
    contact2.appendChild(contact2Image);
    contact2.appendChild(contact2Info);
    contactPage.appendChild(contact2);



    return contactPage;
}

export { contactPage };