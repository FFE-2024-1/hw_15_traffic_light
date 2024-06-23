const waitLight = document.querySelector('.wait');
const readyLight = document.querySelector('.ready');
const goLight = document.querySelector('.go');
const crossBtn = document.querySelector('.cross-button');
const circle = document.querySelectorAll('.circle');

crossBtn.addEventListener('click', async (e) => {
    crossBtn.style.pointerEvents = 'none';
    crossBtn.style.opacity = '0.5';
    await blinkLight();

    crossBtn.style.opacity = '1';
    crossBtn.style.pointerEvents = 'auto';
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

async function navigateToWaitLight() {
    circle[2].classList.remove('active');

    for (let i = 2; i > 0; i--) {
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
    
    circle[0].classList.add('active');

    const delay = new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
    await delay;
}

async function blinkLight() {
    await navigateToGoLight();
    const stopTrafic = new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    await stopTrafic;
    await navigateToWaitLight();
}