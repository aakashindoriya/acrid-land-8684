
// id-> Slide_Bar

const img = document.querySelectorAll("img");
// const btn = document.getElementsByClassName("btn_1");
let i = 0;
let count = 1;
setInterval( () => {
    img.forEach((img, i) => {
        img.style.display = 'none';
        
    });
    if(i == img.length){
        i=0;
    }
    img[i].style.display = 'block';
    i++;
}, 2000);


