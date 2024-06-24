import { User } from "./models/User";
const user = new User({id:8580})

user.fetch()

setTimeout(()=>{
    console.log(user)
},1000)