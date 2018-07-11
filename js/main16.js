var data=[[1,2,3],[4,6,7]];
var flatten=function(arr)
{
    var flatMap=[];
    arr.forEach(function(value)
    {
        if(Array.isArray(value))
        {
            flatMap=flatMap.concat(flatten(value));

        }
    else{
        flatMap.push(value)
    }

    
});

return flatMap;
}
var result =flatten(data);
console.log(result);




var arr =[1,3,[4,5],[7,9,0,2,3,0]];
var flattened=arr.reduce(function(acc,value)
{
    return acc.concat(value)},[]);
    console.log(flattened);