var a=['3','5','7','1'];
var b=['5','7'];
for(i=0;i<b.length;i++)
{
    index=a.indexOf(b[i]);
    if(index>-1)

    {
a.splice(index,1);

    }
}
console.log(a);