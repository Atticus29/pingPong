// Back End
var processInput = function(str){
  var returnVal = undefined;
  if(validates(str)){
    num = parseInt(str);
    var numArray = constructArray(num);
    numArray = changeValuesInIndecesDivisibleByXtoY(3, "ping", numArray);
    // console.log("numArray is " + numArray);
    numArray = changeValuesInIndecesDivisibleByXtoY(5, "pong", numArray);
    // console.log("numArray is " + numArray);
    numArray = changeValuesInIndecesDivisibleByXtoY(15, "ping-pong", numArray);
    console.log("numArray is " + numArray);
    returnVal = numArray;

  }else{
    alert("Please enter a positive integer");
    returnVal = undefined;
  }
  return returnVal;
}
var validates = function(str){
  if(parseInt(str) && parseInt(str)>0 && Math.trunc(str)===parseFloat(str)){
    return true;
  } else{
    return false;
  }
}
var constructArray = function(num){
  var numArray = [];
  for (var i = 0; i<num; i++){
    numArray.push(i+1);
  }
  return numArray;
}
var changeValuesInIndecesDivisibleByXtoY = function(x, y, numArray){
  for(var i = 0; i<numArray.length; i++){
    if((i+1)%x===0){
      numArray[i] = y;
    }else{
      console.log(i+1 + " is not divisible by " + x);
    }
  }
  return numArray;
}


// Front End
$(function(){
  $("#submitForm").submit(function(){
    event.preventDefault();
    var usrStr = $("#usrInput").val();
    processInput(usrStr);
    // console.log(usrStr);
  });
});
