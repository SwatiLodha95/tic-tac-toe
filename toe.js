let turn = "X"
let gameover =false;
//FUNCTION TO CHANGE TURN
const changeturn = ()=>{
return turn === "X"?"0": "X"
}
//FUNCTION TO CHECK THE WIN
const checkwin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
let wins = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"],
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        gameover = true
   document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
   document.querySelector(".line").style.width = "20vw";
}
})
}
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText ===''){
       boxtext.innerText = turn;
       turn = changeturn();
       checkwin();
       if(!gameover){

           document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
       }    
        }
    })
})
//add onclick event on reset button
reset.addEventListener('click',()=>{
let boxtext = document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(element=>{
    element.innerText=""
})
turn = "X"
gameover = false
document.querySelector(".line").style.width = "0vw"
 document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;


})