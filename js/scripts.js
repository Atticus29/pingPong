// Back End
var processInput = function(str){
  var returnVal = undefined;
  if(validates(str)){
    num = parseInt(str);
    var numArray = constructArray(num);
    numArray = changeValuesInIndecesDivisibleByXtoY(3, "ping", numArray);
    numArray = changeValuesInIndecesDivisibleByXtoY(5, "pong", numArray);
    numArray = changeValuesInIndecesDivisibleByXtoY(15, "ping-pong", numArray);
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
      // console.log(i+1 + " is not divisible by " + x);
    }
  }
  return numArray;
}

// Front End
$(function(){
  $("#usrInput").click(function(){
    $("#usrInput").val("");
  });
  $("#submitBtn").click(function(){
    $("#submitBtn i").remove();
    $("#submitBtn").append("<i class='fa fa-spinner fa-spin'></i>");
  });
  // $("#subrow2.5").draggable();
  $("#move-me").draggable();
  $("#submitForm").submit(function(){
    event.preventDefault();
    setTimeout(function() {
      $("#hiddenResultList").empty();
      $(".hiddenResults").show();
      var usrStr = $("#usrInput").val();
      var output = processInput(usrStr);
      output.forEach(function(element){
        $("#hiddenResultList").append("<li class=" +element+ ">" + element + "</li>")
      });
      $(".ping").append("<img src='img/ballTransparent.png' class='ping-special'>");
      $(".ping-special").addClass("animated slideInLeft infinite");
      $(".pong").append("<img src='img/ballTransparent.png' class='pong-special'>");
      $(".pong-special").addClass("animated slideInRight infinite");
      $(".ping-pong").append("<img src='img/ballTransparent.png' class='ping-pong-specialIn'>");
      $(".ping-pong").append("<img src='img/ballTransparent.png' class='ping-pong-specialOut'>");
      $(".ping-pong-specialIn").addClass("animated slideInLeft infinite");
      $(".ping-pong-specialOut").addClass("animated slideInRight infinite");
      $("#submitBtn i").remove();
    },
    3000);
  });
});
