var a=5;
var b=10; 
var c=20;
var d =15;
var e=7;
if((a>b)&&(a>c)&&(a>d)&&(a>e))
{
  console.log(+a,"is largest" );
}
else if((b>c)&&(b>d)&&(b>e))
{
  console.log(+b,"is largest");
}
else if((c>d)&&(c>e))
{
  console.log(+c,"is largest");
}
else if(d>e)
{
  console.log(+d,"is largest");
}