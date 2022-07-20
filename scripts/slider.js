
// id-> Slide_Bar

const img = document.querySelectorAll("img");

let i = 0;

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
