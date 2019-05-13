const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Nav Bar
// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);
const navBar = document.querySelector('nav');
const navLinks = navBar.querySelectorAll('a');
const navObj = siteContent.nav;
const navValues = Object.values(navObj);
[...navLinks].forEach((link, index) => {
  link.textContent = navValues[index];
  link.style.color = 'green'; // change link font colour to green.
});

// Add 2 elements to the nav bar
const BestLink = document.createElement('a');
BestLink.textContent = 'Best Link';
BestLink.setAttribute('href', '#');
BestLink.setAttribute('style', 'color : green');
navBar.prepend(BestLink);

const WorstLink = document.createElement('a');
WorstLink.textContent = 'Worst Link';
WorstLink.setAttribute('href', '#');
WorstLink.setAttribute('style', 'color : green');
navBar.appendChild(WorstLink);

// Header
const ctaObj = siteContent.cta;
// Header H1
const cta = document.querySelector('section.cta');
const ctaH1 = cta.querySelector('h1');
ctaH1.textContent = ctaObj.h1;
// Header Button
const ctaBttn = cta.querySelector('.cta-text button');
ctaBttn.textContent = ctaObj.button;

// RAINBOW BUTTON!
ctaBttn.addEventListener('click', (event) => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
  event.target.style.color = 'white';
  event.target.textContent = 'You clicked me!';
});

// Header Image
const ctaImg = cta.querySelector('#cta-img');
ctaImg.setAttribute('src', ctaObj['img-src']);

// Main Content
const mainContObj = siteContent['main-content'];
// Creating object without image element
const mainContValues = Object.values(mainContObj).filter((element, index) => index !== 4);

// Filling in main-content h4s
// Filtering for h4 values
const mainContH4Values = mainContValues.filter((element, index) => index % 2 === 0);
const mainContH4Elements = document.querySelectorAll('.main-content h4');
// Assigning h4 values to h4 elements
[...mainContH4Elements].forEach((element, index) => {
  element.textContent = mainContH4Values[index];
});

// Filling in main-content ps
// Filtering for p values
const mainContPValues = mainContValues.filter((element, index) => index % 2 === 1);
const mainContPElements = document.querySelectorAll('.main-content p');
// Assigning p values to p elements
[...mainContPElements].forEach((element, index) => {
  element.textContent = mainContPValues[index];
});

// Middle img
const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', mainContObj['middle-img-src']);

// Contact
const contactObj = siteContent.contact;
const contactValues = Object.values(contactObj);
const contactElements = document.querySelector('.contact');
// Assign text content to each of the elements inside section.contact
[...contactElements.children].forEach((element, index) => {
  element.textContent = contactValues[index];
});

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
