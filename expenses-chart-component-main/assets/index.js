const url = 'data.json';

fetch(url)
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++) {
        let dayBox = document.querySelectorAll('.day');
        
        dayBox[i].children[2].textContent = data[i].day;
        dayBox[i].children[1].style.height = data[i].amount * 3 + 'px';
        dayBox[i].children[0].children[0].textContent = `$${data[i].amount}`;

        if(data[i].amount < 50){
            dayBox[i].children[1].style.backgroundColor = 'hsl(10, 79%, 65%)';
        }

        else{
            dayBox[i].children[1].style.backgroundColor = 'hsl(186, 34%, 60%)';
        }

        dayBox[i].children[1].addEventListener('mouseover',() => {
            dayBox[i].children[0].style.visibility = 'visible';
            dayBox[i].children[0].style.opacity = 1;
        });

        dayBox[i].children[1].addEventListener('mouseout',() => {
            dayBox[i].children[0].style.visibility = 'hidden';
            dayBox[i].children[0].style.opacity = 0;
        });
    }
});