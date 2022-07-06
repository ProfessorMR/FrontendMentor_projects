const mainContent = document.querySelectorAll('.main-content');
const prevBtn = document.querySelectorAll('.btn-prev');
const nextBtn = document.querySelectorAll('.btn-next');

let index = 0;

prevBtn.forEach(item => item.addEventListener('click', () => {
    sliderFunc('prev');
}));

nextBtn.forEach(item => item.addEventListener('click', () => {
    sliderFunc('next');
}));

const sliderFunc = (dir) => {
    if(dir == 'next'){
        if(index == mainContent.length - 1){
            index = 0;
        }
        else{
            index++;
        }
    }

    if(dir == 'prev'){
        if(index == 0){
            index = mainContent.length - 1;
        }
        else{
            index--;
        }
    }

    for(let i = 0; i < mainContent.length; i++){
        mainContent[i].classList.remove('active');
    }

    mainContent[index].classList.add('active');
}