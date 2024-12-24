const time = document.querySelector(".time")



    // let timeNow = setInterval(timer, 1000)
    // sec = timeNow
    setInterval(timer, 1000)

function timer(){
    const today = new Date();
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    let gM = ""

    if(hour <= 11){
        gM = "am";
    }
    else{
        gM = "pm"
    }
    
    if(sec < 10){
        sec = "0" + sec
    }
    
    if(min < 10){
        min = "0" + min 
    }
    if(hour > 12){
        hour = hour - 12
    }
    if(hour < 10){
        hour = "0" + hour
    }
    
    let t_str = `${hour}:${min}:${sec} ${gM}`
    
    time.innerHTML =`${t_str}`
}

const clear= document.querySelector("#cl")
const equal= document.querySelector("#equal")
const screen = document.querySelector(".calculator-screen")
const del= document.querySelector("#del")
const btns= document.querySelectorAll(".small-circle2")

//btns.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         screen.value+=btn.innerHTML
//     })
// })
btns.forEach(function(btn){
    btn.addEventListener("click" , function(){
        screen.value +=btn.innerHTML
    })
})
clear.addEventListener("click",()=>{
    screen.value=""
})
del.addEventListener("click", function(){ 
    screen.value=screen.value.slice(0,-1)
})
equal.addEventListener("click", function(){
    screen.value=eval(screen.value)
    
})