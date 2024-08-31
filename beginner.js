const url="https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

async function getData(url,cb){
    const res=await fetch(url)
    const data=await res.json()
    cb(data)
}
function displayData(data){
    console.log(data)
    const deletedes=data.map((val)=>{
     let obj={...val}
     delete obj["description"]
     return obj
    })
    console.log(deletedes)
    const filterdata=data.filter((val)=>{
        return val.year===2020})
    console.log(filterdata)
    const reducedata=data.reduce((acc,curr)=>{
        return acc+curr.votes
    },0)
    console.log(reducedata)
}

console.log(getData(url,displayData))