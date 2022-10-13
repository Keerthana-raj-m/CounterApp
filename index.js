const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

add.addEventListener("click", ()=>{
    count.innerHTML++;
    setColor()
})

sub.addEventListener("click", ()=>{
    count.innerHTML--;
    setColor()
})

resetCount.addEventListener("click", ()=>{
    count.innerHTML = 0;
    setColor()
})


function setColor(){
    if(count.innerHTML > 0){
        count.style.color = "blue"
    } else if (count.innerHTML < 0){
        count.style.color = "red"
    } else {
        count.style.color = "white"
    }
}
