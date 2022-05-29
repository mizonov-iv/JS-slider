const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let index = 0;

showImage(index);

btnPrev.addEventListener('click', () => {
    showImage(-1);
});
btnNext.addEventListener('click', () => {
    showImage(1);
});

function showImage(i) {
    index += i;

    const images = document.querySelectorAll('.image');
    const dots = document.querySelectorAll('.dot');

    for (i = 0; i < images.length; i++)
        images[i].style.display = 'none';
    
    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(' active', '');
    
    if (index > images.length - 1)
        index = 0;
    
    if (index < 0)
        index = images.length - 1;
    
    images[index].style.display = 'block';
    dots[index].classList.add('active');
}