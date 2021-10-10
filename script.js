// **----------------------------Clothes section--------------------------**//

const clothes_btn = document.querySelector('.clothes_btn');
const clothes_page = document.querySelector('.clothes_page');

clothes_btn.addEventListener('click', () => {
	clothes_page.scrollIntoView({ behavior: 'smooth' });
});

// **----------------------------Brands section --------------------------**//
const brands_btn = document.querySelector('.brands_btn');
const brands_page = document.querySelector('.brands_page');

brands_btn.addEventListener('click', () => {
	brands_page.scrollIntoView({ behavior: 'smooth' });
});
// **----------------------------Shoes section --------------------------**//
const shoes_btn = document.querySelector('.shoes_btn');
const shoes_page = document.querySelector('.shoes_page');

shoes_btn.addEventListener('click', () => {
	shoes_page.scrollIntoView({ behavior: 'smooth' });
});

// **----------------------------Perfume section --------------------------**//
const perfume_btn = document.querySelector('.perfume_btn');
const perfume_page = document.querySelector('.perfume_page');

perfume_btn.addEventListener('click', () => {
	perfume_page.scrollIntoView({ behavior: 'smooth' });
});

// **----------------------------Accessories section --------------------------**//
const accessories_btn = document.querySelector('.accessories_btn');
const accessories_page = document.querySelector('.accessories_page');

accessories_btn.addEventListener('click', () => {
	accessories_page.scrollIntoView({ behavior: 'smooth' });
});
// **----------------------------Phones section --------------------------**//
const phones_btn = document.querySelector('.phones_btn');
const phones_page = document.querySelector('.phones_page');

phones_btn.addEventListener('click', () => {
	phones_page.scrollIntoView({ behavior: 'smooth' });
});

// **--------------------------- To top --------------------------**//
const top_btn = document.querySelector('.top_btn');

top_btn.addEventListener('click', () => {
	window.scrollTo(0, 0);
});
