let fetchApi = async ()=>{
    await fetch("https://dummyjson.com/users")
    .then(async (data)=>{let a = await data.json()
        return a
    })
}
let api = fetchApi()
let user1 = api[0]
user1.displayInfo = ()=>{
    console.log(this.id,this.firstName,this.lastName)
}
user1.displayInfo()