function email(name,id)
{
    var msg="Hi"+ name  + "You have been assigned ID:"+ id +"submit fees"
    return msg
}
//email ('Mayur',1001)
//console.log(email ('Gaurav',1001));

var cobj = {
        name : 'Saurabh',
        id : 1002,
        name : 'Gaurav',
        id : 1003,
        name : 'Mayur',
        id : 1004

    }
        for ( var i of cobj )
    {
        //email (i.name, i.id)

        console.log(email (i.name, i.id))
        
        //console.log(i);
        
    }

    


// function multiple (x,y=2)
// {
//     console.log(x);
//     console.log(y);
//     return x*y        
    
// }
// //console.log(multiple(null,3));
// console.log(multiple(undefined,3)); // if user perform operation with undefined then it will NAN
//var sat = (x=3,y=4) => { 
  //  return x*y }
//console.log(sat());
//console.log(Number.NEGATIVE_INFINITY);
