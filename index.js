function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

var sayHiToGrandma = 'hello'

function sayHiToGrandma(string){
  if(sayHiToGrandma.toLowerCase()===sayHiToGrandma){
    return "I can't hear you!";
  }else if (string==="I love you,Grandma."){
    return "I love you, too.";
  }else{
    return "YES INDEED!";
  }
}





3) sayHiToGrandma(string) returns "I love you,too." if `string` is "I love you, Grandma."`: