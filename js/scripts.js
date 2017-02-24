// Back End
var processInput = function(str){
  if(validates(str)){
    // console.log("this happened");
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


// Front End
$(function(){
  $("#submitForm").submit(function(){
    event.preventDefault();
    var usrStr = $("#usrInput").val();
    processInput(usrStr);
    // console.log(usrStr);
  });
});
