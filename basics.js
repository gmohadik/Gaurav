// var a="Gaurav\"Mayur\" both name \v will get displayed";
// console.log(a);
// console.log(typeof(a));
// var x='10'
// var y='10'
//x=y
//x==y // checking only value //return true
//x===y // check value as well as variable type //return false 
//var r=x+y // here x is numeric and y is string so it will consider + as concatination and will give o/p as 1010
//var r=x-y // it will calculate r on the basis of arthmatic operators
//console.log(r);

//var s="I am a Mean stack developper"
//console.log(s.indexOf()); // It will give -1 as o/p
// console.log(s.search("t")); //will give same o/p
// console.log(s.indexOf("t"));

//console.log(s.slice(2,7)); // n-1 rule
//console.log(s.substring(2,5));
//console.log(s.substr(2,4));
// Array.isArray() // to check array will return true or false
//var a=null; // NAN - Not a number
// var abc = "I am a mean stack developper"
// var pqr=abc.toLowerCase()
// var xyz ={
//         'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 
//         'l': 12, 'm': 13, 'n': 14,'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 
//         'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, ' ':0
//     }
// var a=[]
// for ( i of pqr )
// {
//     for ( j in xyz) 
//     {
//         if (j==i)
    
//     {
//         a.push(xyz[j])
        
        
//     }

// }


// let a=20
// function fun2() { let a=30 
// }
// function fun1() { let a=40 }
// {
//     let a=100
//     console.log(a);
    
// }
// {
//     let a=200
//     fun1()
//     console.log(a);
    
// }

// }
// console.log(a);


// const a=10
// a=20
// console.log(a);
// var streetaddress = "PG Road"
// var pin = 1002
// var state = "MH"
// var city = "Pune"
// var country = "Ind"
// let firstaddress={
//     [streetaddress]:"MG Road",
//     [pin] : 1003,
//     [state] : "MP",
//     [city]: "NY",
//     [country]: "US"
// }
// console.log(firstaddress)



// let firstvariable='firstvalue'
// let secondvariable='secondvalue'
// let myobject ={
//     secondvariable:firstvariable
// }
// console.log(myobject.secondvariable);

// let firstvariable='firstvalue'
// let secondvariable='secondvalue'

// let myobject ={
//     secondvariable:firstvariable
// }
// console.log(myobject.secondvariable);


// var cars = [
//     { type:"Volvo", year:2016},
//     { type:"Sab", year:2014},
//     { type:"BMW", year:2015}

// ]

// Array.isArray(cars)
// console.log(Array.isArray(cars));
// var txt=""
// var num = [1,2,3,4,5]
// num.forEach(myvalue)
// console.log(typeof(forEach));

// function myvalue(value,index,array)
// {

// console.log("Gaurav");

// }
//console.log(cars[0].type);
// for ( var i of cars )
//      {
//          console.log(i.type, i.year);
        
//      }

// var num1=[6,2,3,4,58]
// var num2=num1.findIndex(myfun)
// console.log(num2)
// function myfun(value)
// {
//     return value > 20
//     //console.log("Gaurav");
// }

// let no = '9888888888'
// var sum=0
// if (no[0]==7 || no[0]==8 || no[0]==9){
//     if(no.length==10){
//         for (var i in no){
//             //console.log(no[i])
//             if(no[0]== no[i]){
//                 sum=sum+1
//             }
            
//         }

//         if(sum!=10){
//             console.log('Valid No')
//         }
//         else{
//             console.log('Invalid No')
//         }
        
    
//     }
//     else{
//         console.log('Invalid No')
//     }

    
// }
// else{
//     console.log('InValid No')

// }

// var a = Gaurav
// var b=Number(a)
// console.log(b);

// console.log(undefined*null);
// console.log(NaN * null);
// console.log(undefined + null);
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof(NaN));

//Concatination using template literals
var para = `I am a Mean Stack Developper`
var a= "Full Stack Developper"
var b="UI Developper"

console.log(`${a} Hi,${(2+3)} ------a and ------b${b}`);






