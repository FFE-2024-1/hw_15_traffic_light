const waitLight = document.querySelector('.wait');
const readyLight = document.querySelector('.ready');
const goLight = document.querySelector('.go');
const crossBtn = document.querySelector('.cross-button');
const circle = document.querySelectorAll('.circle');

crossBtn.addEventListener('click', () => {
   navigateToGoLight();
});

async function navigateToGoLight() {
    for(let i = 0; i < 2; i++) {
        const intervalId = setInterval(() => {
            circle[i].classList.toggle('active');
        }, 500);
        
        const stepPromise = new Promise(resolve => {
            setTimeout(() => {
                clearInterval(intervalId);
                resolve();
            }, 3000);
        });
    
        await stepPromise;
        circle[i].classList.remove('active');
    }
    circle[2].classList.add('active');
}

function navigateToWaitLight() {

}

async function blinkLight() {
    
}