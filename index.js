// alert("is it connected");
// document.querySelectora("button").addEventListener("click",handleclick);
// function handleclick()
// {
//     alert("i got clicked");
// }

// document.querySelector("button").addEventListener("click",function (){
//     alert("i got clicked");

// });
var num=document.querySelectorAll(".drum").length;
for(var i=0;i<=num;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",function()
   {
    // console.log(this.innerHTML);
    // this.style.color="white";
    var buttonInnerhtml=this.innerHTML;
    switch(buttonInnerhtml)
    {
        case "w":
            var audio=new  Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio1=new Audio('sounds/tom-2.mp3');
            audio1.play();
        break;
        case "s":
            var audio2=new Audio('sounds/tom-3.mp3');
            audio2.play();
        break;
        case "d":
            var audio3=new Audio('sounds/tom-4.mp3');
            audio3.play();
        break;
        case "j":
            var audio4=new Audio('sounds/crash.mp3');
            audio4.play();
        break;
        case "k":
            var audio5=new Audio('sounds/kick-bass.mp3');
            audio5.play();
        break;
        case "l":
            var audio6=new Audio('sounds/snare.mp3');
            audio6.play();
        break;

        default :console.log(buttonInnerhtml);
    }
   
   });
    
}


