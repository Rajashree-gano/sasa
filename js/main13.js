var string = "heart2heart@gmail.com";

function countOccurrence (char) {
  var count = 0;
  for(var i=0; i<string.length; i++) {
  	if(string[i] === char) {
    	count++;
    }
  }
  return count;
}

console.log(countOccurrence ('a'));
console.log(countOccurrence ('n'));