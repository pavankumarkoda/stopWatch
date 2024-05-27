// let num=[1, 4, 5, 6, 2, 1,3 ,5 ,7 ,8];
// num.sort((a, b) => b-a);
// console.log(num);


// let people= [{name:"avan", age:17, gpa:8.7},
// {name:"van", age:133, gpa:8.7},
// {name:"pavan", age:137, gpa:8.7}
// ]


// people.sort((a,b)=>b.name.localeCompare(a.name))
// console.log(people)
// const date = new Date();
// console.log(date)


// function datee(){
//     alert(`today date is ${date}`)
// }
// setTimeout(datee,3000);

// function update(){
//     const now = new Date();
//     const hours= now.getHours().toString().padStart(2,0);
//     const mins= now.getMinutes().toString().padStart(2,0);
//     const sec= now.getSeconds().toString().padStart(2,0);
//     const time= `${hours}:${mins}:${sec}`;
//     document.getElementById("clock").textContent= time
// }
// update();
// setInterval(update,1000)
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now(); // Corrected
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer); // Clear the interval
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let mil = Math.floor(elapsedTime / 10 % 100);

    display.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${mil.toString().padStart(2, '0')}`;
}
