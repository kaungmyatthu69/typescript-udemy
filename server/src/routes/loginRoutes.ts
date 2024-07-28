import { Router ,Response,Request,NextFunction} from "express";
interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined};
}

const router = Router();


function requireAuth(req:Request, res:Response, next:NextFunction):void{
    if(req.session && req.session.isLogin){
        next();
        return;
    }
    res.status(403)
    res.send('Not permitted')

}


router.get('/login', (req:Request, res:Response) => {
    res.send(`
        <form method='POST'>
        <label>Email</label>
        <input type='email' name='email' />
            <label>Password</label>
        <input type='password' name='password' />
        <button type='submit'>Login</button>
        </form>
        `);
})


router.post('/login',(req:RequestWithBody,res:Response)=>{
    const {email,password} = req.body
    if(email && password && email ==="hi@hi.com" && password ==="123"){
        req.session={isLogin :true}
        res.redirect('/')
    }else{
        res.send('Invalid email or password')
    }
})


router.get('/',(req:Request,res:Response)=>{
    if(req.session && req.session.isLogin){
        res.send(`
            <div>Welcome Your are logged in</div>
            <a href='/logout'>log out</a>
            `)
    }else{
        res.send(`
            <div> Your are not logged in</div>
            <a href='/login'>login</a>
            `)
    }
})

router.get('/logout',(req:Request,res:Response)=>{
    req.session=undefined
    res.redirect('/')
})

router.get('/protected',requireAuth,(req:Request,res:Response){
    res.send(`
        <p>Welcome to protected route</p>
        <p>Login user</p>
        `)
})
export { router };