// Back End
var processInput = function(str){
  if(validates(str)){
    num = parseInt(str);
    var numArray = constructArray(num);
    console.log("numArray is " + numArray);
  }else{
    alert("Please enter a positive integer");
    return false;
  }
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


// Front End
$(function(){
  $("#submitForm").submit(function(){
    event.preventDefault();
    var usrStr = $("#usrInput").val();
    processInput(usrStr);
    // console.log(usrStr);
  });
});
