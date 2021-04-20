function printOddNums(){
  //get the start and end range from user
  var minimum = document.getElementById("minimum").value;
  var maximum = document.getElementById("maximum").value;
  var oddNums = "<br>Odd Numbers:<br>";

  for(i=minimum; i<=maximum; i++){
    // let's divide the value by 2
    // if the reminder is not a zero then it's an odd number
    if(i % 2 != 0){
      oddNums += i + ",";
    }
  }
  //print the values
  document.getElementById("result").innerHTML = oddNums;
}



function printEvenNums(){
  //get the start and end range from user
  var minimum = parseInt(document.getElementById("minimum").value);
  var maximum = parseInt(document.getElementById("maximum").value);
  var evenNums = "<br>Even Numbers:<br>";

  for(i=minimum; i<=maximum; i++){
    // let's divide the value by 2
    // if the reminder is zero then it's an Even number
    if(i % 2 == 0){
      evenNums += i + ",";
    }
  }
  //print the values
  document.getElementById("result").innerHTML = evenNums;
}