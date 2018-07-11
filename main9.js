var obj = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    };
   var arr = [];
   for(var i in obj)
   {
       var val = obj[i];
       arr.push(val);
   }
console.log(arr);