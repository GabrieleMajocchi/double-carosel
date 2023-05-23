
const imgList = [['gow1', 'gow2', 'gow3', 'gow4', 'gow5'], ['codmw1', 'codmw2', 'codmw3'],['diablo1', 'diablo2', 'diablo3', 'diablo4']];

const carouselGroup = document.querySelector('div.carousel');


let activeIndex = 0;
let activeIndex2 = 0;

for ( let i = 0 ; i < imgList.length ; i++ ){
    carouselGroup.innerHTML +=
    `<div class="carousel-group${i}"></div>`;
    const carouselElement = document.querySelector('div.carousel-group'+ i);
    for (let b = 0 ; b < imgList[i].length; b++){
        carouselElement.innerHTML +=
        `<div class="carousel-item ${b}">
        <img src="./img/${imgList[i][b]}.jpg" alt="Carousel slide image">
        </div>`;
    }
}

document.querySelector('div.carousel-group'+activeIndex).classList.add('active');
document.querySelectorAll('div.carousel-group'+activeIndex+' div.carousel-item')[activeIndex2].classList.add('active');

const prevButton = document.querySelector('div.previous-button');
prevButton.addEventListener('click', function(){
    document.querySelector('div.carousel-group'+activeIndex).classList.remove('active');

    if (activeIndex == 0 ) {
        activeIndex = imgList.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }

    activeIndex2 = 0;

    document.querySelector('div.carousel-group'+activeIndex).classList.add('active');
    
    showitem (activeIndex, activeIndex2);
});

const nextButton = document.querySelector('div.next-button');
nextButton.addEventListener('click', function(){
    document.querySelector('div.carousel-group'+activeIndex).classList.remove('active');

    if (activeIndex == imgList.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    activeIndex2 = 0;

    document.querySelector('div.carousel-group'+activeIndex).classList.add('active');
    
    showitem (activeIndex, activeIndex2);
});

const infoprevButton = document.querySelector('div.infonext-button');
infoprevButton.addEventListener('click', function(){
    if (activeIndex2 == 0 ) {
        activeIndex2 = imgList[activeIndex].length - 1;
    } else {
        activeIndex2 = activeIndex2 - 1;
    }

    showitem (activeIndex, activeIndex2);
});

const infonextButton = document.querySelector('div.infopre-button');
infonextButton.addEventListener('click', function(){
    if (activeIndex2 == imgList[activeIndex].length - 1 ) {
        activeIndex2 = 0;
    } else {
        activeIndex2 = activeIndex2 + 1;
    }

    showitem (activeIndex, activeIndex2);
});




// ----------------
// ----Function----
// ----------------

/**
 * 
 * @param index indicate the number of groups that are showed in the slider
 * @param index2 indicate the ammount of item related to the group
 * 
 * @returns remove the class active from the old showed item of active group and give it to the newer item of the active group
 */
function showitem (index, index2){
    document.querySelector('div.carousel-item.active').classList.remove('active');
    document.querySelectorAll('div.carousel-group'+index+' div.carousel-item')[index2].classList.add('active');
}
