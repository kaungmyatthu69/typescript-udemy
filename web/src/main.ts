import { User } from "./models/User";


const user = new User({
    name: "Stephen",
    age: 30,
});
let name =user.get("name"); // "Stephen"
console.log('name',name)
