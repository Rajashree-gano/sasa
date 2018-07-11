var todaydate = new Date();
var date = todaydate.getDate();

var mm = todaydate.getMonth()+1; 
var yyyy = todaydate.getFullYear();
if(date<10) 
{
    date='0'+date;
} 

if(mm<10) 
{
    mm='0'+mm;
}
todaydate = mm+'/'+date+'/'+yyyy;
console.log(todaydate);


