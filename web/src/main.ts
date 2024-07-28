// import { Collection } from "./models/Collection";
// import {User,UserProps} from "./models/User"

// const userCollection = User.buildUserCollection()

// userCollection.on('change',()=>{
//     console.log('collections',userCollection)
// })

// userCollection.fetch()


import { UserForm } from "./views/UserForm";

const userForm =new  UserForm(
    document.getElementById('app')
)

userForm.render()