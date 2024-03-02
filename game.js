const buttonEl = document.querySelector(".b1");
const displayEl = document.querySelector('.result1');
var res1;
var res2;

var resE=document.querySelector("h2");




let randomNumber=()=>{
      res1 = Math.floor(Math.random()*3+1);
    var randomImg1="images/rp"+res1+".jpg";
    console.log(res1);
        document.querySelector(".img1").setAttribute("src",randomImg1);
    if(res1==1)
    {
        displayEl.innerHTML="Rock";
         
    }
    else if(res1==2){
        displayEl.innerHTML="Paper";
         
    }
    else{
        displayEl.innerHTML="Scissor";
        
    }
    result();
    document.querySelector(".arrow1").style.visibility="visible";
    document.querySelector(".arrow2").style.visibility="hidden"; 
}

buttonEl.addEventListener('click',() => randomNumber());
randomNumber();


const buttonE2 = document.querySelector(".b2");
const displayE2 = document.querySelector(".result2");
let randomNumber2=()=>{
       res2 = Math.floor(Math.random()*3+1);
    var randomImg2="images/rp"+res2+".jpg";
    console.log(res2);
    document.querySelector(".img2").setAttribute("src",randomImg2);
    if(res2==1)
    {
        displayE2.innerHTML="Rock";
    }
    else if(res2==2)
    {
        displayE2.innerHTML="Paper";

    }
    else{
        displayE2.innerHTML="Scissor";
    }
    result();
    document.querySelector(".arrow1").style.visibility="hidden";
    document.querySelector(".arrow2").style.visibility="visible"; 
}
buttonE2.addEventListener('click',() => randomNumber2());
randomNumber2();
 
function result()
{
    if(res1==res2)
    {
     resE.innerHTML="Draw";
    }
    else if(res1==1 && res2==3||res1==2 && res2==1||res1==3 && res2==2){
        resE.innerHTML="Player 1 won!";
    }
    else{
        resE.innerHTML="Player2 won!";
    }
}

 