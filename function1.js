//Assignments
//4
var a=null+2
console.log(a); //2
var b=null+"2"
console.log(b); //null2
var c=null*2
console.log(c); //0
var d=undefined+"2"
console.log(d); //undefined2
var e=undefined+2
console.log(e); //Nan
var f=undefined-2
console.log(f); //Nan
var g=true*6
console.log(g); //6
var h=false+2
console.log(h); //2
var i=false+5
console.log(i); //5
var j=true+1
console.log(j); //2
var k=(2==2)+1
console.log(k); //2
var l=(2<5)-1
console.log(l);//0
var m=((2<5)&&(1>0))+4
console.log(m);//5
var n=((2<5)||(1>0))+6
console.log(n); //true
var o=((2<5) && (1<0))+4
console.log(o); //4


//11

var ar=[]
var a=["Rahul","Kiran","Jasmine","Lokesh"]
for (var i of a)
{
    if (i=="Rahul"||i=="Lokesh")
    ar.push(i)
}
    console.log(ar);


//12
var array = [10, 40, 5, 7, 25, 50];
array.sort(function(a, b){return b - a});
console.log(array);

//8

var hobbies=["Cricket","Singing","Kho-Kho","Dance"]
var a=hobbies.shift()
//console.log(a);

var arr =[a]
//console.log(hobbies.sort());
for (var i of hobbies.sort())
{
arr.push(i)
}
console.log(arr);


//7
//  var a=9876543210
//  if ( a[0]==9 || 8 || 7 )
//  {
//  if( a.length==10 && a!=NaN)
//  {
//      console.log(a+"Valid Number");
     
//  }
// }
//  else
//  {
//      console.log(a+"Not Valid Number");
     
//  }

//6
var a="abc@gmail.com"
var c=a.match(/\w+/g)
console.log(c);



 //5
 var a="abc@gmail.com"
