let person=['arjun','kishore']
for(let i=0;i<person.length;i++){
      console.log(person[i])
}

let personObject={
    'name':'arjun',
    'year':'2021'
}
let personKey=Object.keys(personObject)
for(let i=0;i<personKey.length;i++){
      console.log(personObject[personKey[i]])
}

//for each

let values=['arjun','kishore']
values.forEach(val=>{
    console.log(val)
})

//for in
let carArray=['BMW','AUDI']
for (let a in carArray){
    console.log(carArray[a])
}