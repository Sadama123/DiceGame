
window.onload =function randomdice(){
var randomNumber1= Math.floor((Math.random()*5)+1);
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
var randomNumber2= Math.floor((Math.random()*5)+1);
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");
console.log(randomNumber1);
console.log(randomNumber2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("KAREN WINS");
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=("JOEPETH WINS");
}
else{
    document.querySelector("h1").innerHTML=("ITS A DRAW");
}

}