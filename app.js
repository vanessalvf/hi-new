'use strict';


console.log("is this thing working");
alert("Hi, I am glad you are alive");


function someName(){
  const usersName = prompt("What is your name?");
  return usersName;
}

function sayingHello(){
  document.write("Hi hi" + someName);
}


//console.log(usersName);

function extraMessage(usersName){
  if (usersName == ""){
    usersName = prompt("Okay then, no name.");
  }


if (usersName == "aurelius"){
  document.write("Hi hubs");
} else if (usersName == "Damaris"){
  document.write("hi bestie");
} else if (usersName == "Cameron"){
  document.write("I hope I'm doing this Javascript thing correct");
}