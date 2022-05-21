function homePage() {
    // create homePage div
    const homePage = document.createElement('div');
    homePage.classList.add('home');

    // create intro container, intro header, intro body
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h2');
    const introBody = document.createElement('div');

    // create reviews containers, reviews, review bottom
    const reviewContainer = document.createElement('div');
    const review1 = document.createElement('div');
    const review2 = document.createElement('div');
    const review3 = document.createElement('div');
    const review1Text = document.createElement('div');
    const review2Text = document.createElement('div');
    const review3Text = document.createElement('div');
    const review1Bottom = document.createElement('div');
    const review2Bottom = document.createElement('div');
    const review3Bottom = document.createElement('div');

    // add classes 
    introContainer.classList.add('introContainer');
    introHeader.classList.add('introHeader');
    introBody.classList.add('introBody');
    reviewContainer.classList.add('reviewContainer');
    review1.classList.add('review');
    review2.classList.add('review');
    review3.classList.add('review');
    review1Text.classList.add('reviewText');
    review2Text.classList.add('reviewText');
    review3Text.classList.add('reviewText');
    review1Bottom.classList.add('reviewBottom');
    review2Bottom.classList.add('reviewBottom');
    review3Bottom.classList.add('reviewBottom');

    // add text content
    introHeader.textContent = 'Our Story';
    introBody.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    review1Text.textContent = 'Bob: Nice staff, good food, and clean restaurant. Keep it up.';
    review2Text.textContent = 'Alice: The kebabs are delicious and authentic for a fair price and good portions. Highly recommended!';
    review3Text.textContent = 'Kevin: The owner beat me up, but the kebabs are pretty good..';
    review1Bottom.textContent = '★ ★ ★ ★ ★';
    review2Bottom.textContent = '★ ★ ★ ★ ★';
    review3Bottom.textContent = '★ ★ ★ ★ ☆';

    // append intro stuff into intro container
    introContainer.appendChild(introHeader);
    introContainer.appendChild(introBody);

    // append review stuff
    review1.appendChild(review1Text);
    review2.appendChild(review2Text);
    review3.appendChild(review3Text);
    review1.appendChild(review1Bottom);
    review2.appendChild(review2Bottom);
    review3.appendChild(review3Bottom);
    reviewContainer.appendChild(review1);
    reviewContainer.appendChild(review2);
    reviewContainer.appendChild(review3);

    // append restaurant intro & review container to homePage div
    homePage.appendChild(introContainer);
    homePage.appendChild(reviewContainer);

    return homePage;
}

export { homePage };