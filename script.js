const spanEl = document.querySelector("main h2 span");
const txtArr = ["Web Publisher", "Front-End Developer", "Web UI Designer"];
let index = Math.floor(Math.random()*100)%3;
let currentTxt = txtArr[index].split("");

function delay(ms = 50) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
async function writeTxt(){
    let index = Math.floor(Math.random()*100)%3;
    let currentTxt = txtArr[index].split("");
    spanEl.innerHTML = ``;
    for(let i =0;i<currentTxt.length;i++){
        spanEl.innerHTML += currentTxt[i];
        await delay();
    }
}
setInterval(function(){
    writeTxt();
}, 6000);

let header = document.querySelector("header");
window.addEventListener("scroll",function(){
    if(this.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});