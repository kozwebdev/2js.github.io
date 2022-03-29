let message="qroqroqro!";
alert(message);
function countToTen()  {
  var count =  0;
  while (count < 10)  {
    count++;
    console.log(count);
    document.getElementById("theCount").innerHTML  +=  count + "<br>";
  }
}
/*firstNum = prompt("Введите первое число");
let secondNum = prompt("Введите второе число");
let answer  = Number(firstNum) + Number(secondNum);
alert(answer);*/
var goat =  new  Array(1,"clap",true);

var cow  = ["moo","troubles"];
console.log(goat,cow);
var counter  =  new Array(20);
for(var i=0; i<counter.length;i++){
  counter[i]=i;
  console.log(counter[i]);
}