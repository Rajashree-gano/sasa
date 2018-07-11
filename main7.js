var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var x=JSON.parse(jsonStr);
console.log(x);
for(var i in x)
{
    console.log(i);
}
