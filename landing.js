const change = document.querySelector('#change');
const change2 = document.querySelector('#change2');
const change3 = document.querySelector('#change3');
const foot = document.querySelector('.foot');

change.addEventListener('click', () => {
    imgSlide('sneaker-r.png')
});
change2.addEventListener('click', () => {
    imgSlide('sneaker1-r.png')
});
change3.addEventListener('click', () => {
    imgSlide('sneaker2-r.png')
});

function imgSlide(anything) {
    foot.src = anything;
}

