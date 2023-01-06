for (let i = 0; i < 400; i++) {
   document.getElementsByClassName("square")[i].setAttribute("id", "square" + (i+1));
   // document.getElementsByClassName("square")[i].innerHTML = i + 1;
}
var speed = 1;
var snake = [211];
var dir = 'ArrowRight';
var food = Math.round(Math.random()*400);
var score = 0;

document.querySelector("#square"+food).classList.add("food");
snake.forEach((el)=>{
   document.querySelector("#square"+el).classList.add("snake");
 })

 setInterval(()=>{
   if(((snake[0]%20==0)&&(dir=='ArrowRight'))||((snake[0]%20==1)&&(dir=='ArrowLeft'))||((snake[0]<=20)&&(dir=='ArrowUp'))||((snake[0]>=381)&&(dir=='ArrowDown')))
       {
         document.querySelector("h1").innerHTML = "Gameover";
         clearInterval;
         return;
       }
   document.addEventListener("keydown", (event) => {
      if(dir=='ArrowRight'&&(event.key=="ArrowUp"||event.key=="ArrowDown"))dir=event.key;
      else if(dir=='ArrowUp'&&(event.key=="ArrowRight"||event.key=="ArrowLeft"))dir=event.key;
      else if(dir=='ArrowLeft'&&(event.key=="ArrowUp"||event.key=="ArrowDown"))dir=event.key;
      else if(dir=='ArrowDown'&&(event.key=="ArrowRight"||event.key=="ArrowLeft"))dir=event.key;
   });

   snake.forEach((el)=>{
      document.querySelector("#square"+el).classList.remove("snake");
    })
 if(snake[0]===food){
   document.querySelector("#square"+food).classList.remove("food");
   food = Math.round(Math.random()*400);
   document.querySelector("#square"+food).classList.add("food");
   snake.unshift(snake[0]);
   score += 1;
   document.getElementById("score").innerHTML="Score : "+score;
  }
  snake.unshift(snake[0]);
  snake.pop();
   checker(dir);
     snake.forEach((el)=>{
      document.querySelector("#square"+el).classList.add("snake");
    })
 }, 300);
   
function checker(dir){
   if(dir == 'ArrowLeft')
      {
    snake[0]--;
      }
   else if(dir == 'ArrowRight')
     {
   snake[0]++;
     }
   else if(dir == 'ArrowUp')
     {
   snake[0] -= 20;
     }
   else if(dir == 'ArrowDown')
     {
  snake[0] += 20;
     }
}