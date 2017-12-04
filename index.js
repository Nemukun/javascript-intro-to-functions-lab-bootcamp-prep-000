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
  }
}



2) sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:

3) sayHiToGrandma(string) returns "I love you,too." if `string` is "I love you, Grandma."`: