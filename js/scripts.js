
 function resCalc(p1,op,p2,res){
   switch(op) {
     case "X":
         if(p1 * p2 == res){
           return true;
         }
         else return false;
         break;
     case "+":
         if(p1 + p2 == res){
           return true;
         }
       else return false;
           break;
     default:
         if(p1 - p2 == res){
           return true;
         }
         else return false;
           break;
     }
 }

 function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
 }

 function getAnsOptRank(lRank) {
   return getRandomArbitrary(0,lRank*4);
 }

var ans_opt_1,ans_opt_2,ans_opt_3,ans_opt_4,ans_opt_5,ans_opt_6;
var q1,q2;
var op;

var rank = 7;

var dailyProgress=0;

ans_opt_1=4;
ans_opt_2=63;
ans_opt_3=2;
ans_opt_4=16;
ans_opt_5=5;
ans_opt_6=7;

q1=9;
q2=7
op="-"


// Question
document.getElementById("q1").innerHTML = q1;
document.getElementById("q2").innerHTML = q2;
document.getElementById("oper").innerHTML = op;

// Answers Options
document.getElementById("ans_opt_1").innerHTML = ans_opt_1;
document.getElementById("ans_opt_2").innerHTML = ans_opt_2;
document.getElementById("ans_opt_3").innerHTML = ans_opt_3;
document.getElementById("ans_opt_4").innerHTML = ans_opt_4;
document.getElementById("ans_opt_5").innerHTML = ans_opt_5;
document.getElementById("ans_opt_6").innerHTML = ans_opt_6;

// On Click
$("#ans_opt_1").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  if(resCalc(q1,op,q2,ans_opt_1)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_1;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_1;
  }
});
$("#ans_opt_2").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  if(resCalc(q1,op,q2,ans_opt_2)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_2;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_2;
  }
});
$("#ans_opt_3").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  if(resCalc(q1,op,q2,ans_opt_3)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_3;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_3;
  }
});
$("#ans_opt_4").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  $('#ans').removeClass('btn-primary').addClass('btn-success');
  if(resCalc(q1,op,q2,ans_opt_4)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_4;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_4;
  }
});
$("#ans_opt_5").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  if(resCalc(q1,op,q2,ans_opt_5)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_5;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_5;
  }
});
$("#ans_opt_6").click(function(){
  dailyProgress++;
  $('#prog_bar').width(dailyProgress*10+"%");
  if(resCalc(q1,op,q2,ans_opt_6)) {
    $('#ans').removeClass('btn-primary').addClass('btn-success');
    document.getElementById("ans").innerHTML = ans_opt_6;
  } else {
    $('#ans').removeClass('btn-primary').addClass('btn-danger');
    document.getElementById("ans").innerHTML = ans_opt_6;
  }
});
