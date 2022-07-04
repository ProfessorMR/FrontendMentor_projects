const timeline = document.querySelectorAll('.timeline ul li');

window.addEventListener('load',mainData('weekly'));

let dataTarget = '';
let nameTimeLine = '';

for(let j = 0; j < timeline.length; j++){
    timeline[j].onclick = (e) => {
        
        let counter = 0;
        while(counter < timeline.length){
            timeline[counter++].classList.remove('active');
        }
        timeline[j].classList.add('active');

        dataTarget = timeline[j].getAttribute('data-target');
        nameTimeLine = e.target.textContent;

        mainData(dataTarget);

    }
}

async function fetchData(url){
    let fetchData = fetch(url,{
        method: 'GET'
    });
    let response = await fetchData
    let data = await response.json();
    return data;
}

async function mainData(el){
    let data =  await fetchData('data.json');

    const cardItems = document.querySelector('.card-items');
    const title = cardItems.querySelectorAll('.item .title p');
    const timeCurrent = cardItems.querySelectorAll('.item .time-doing h1');
    const timePrevious = cardItems.querySelectorAll('.item .time-doing p');

    for(let i = 0; i < data.length; i++) {
        title[i].textContent = data[i].title;
        
        if(nameTimeLine == dataTarget){
            timeCurrent[i].textContent = `${data[i].timeframes[el.toLowerCase()].current}hrs`;
            timePrevious[i].textContent = `Last ${el == 'Daily' ? 'Day' : el.slice(0,-2)} - ${data[i].timeframes[el.toLowerCase()].previous}hrs`;
        }
    }
}