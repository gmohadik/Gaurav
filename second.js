let alladdress=[]
let storeaddress = (userid, ...addresstostore)=>{
    console.log(userid);
	console.log(addresstostore);
    let customaddress={userId:userid, useraddress:addresstostore}
	
    console.log(alladdress.push(customaddress))
    return alladdress
}
let firstaddress={
    'streetaddress':"lodhiroad",
    'pin': '20016',
    'state':'mh',
    'city':'pune',
    'country':'india'
}
secondaddress={
    'streetaddress':"lodhiroad",
    'pin': '20016',
    'state':'mh',
    'city':'pune',
    'country':'india'   
}
thirdaddress={
    'streetaddress':"lodhiroad",
    'pin': '20016',
    'state':'mh',
    'city':'pune',
    'country':'india'   
}
console.log(storeaddress("1001",firstaddress,secondaddress));