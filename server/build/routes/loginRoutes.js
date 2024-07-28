"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.isLogin) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
router.get('/login', (req, res) => {
    res.send(`
        <form method='POST'>
        <label>Email</label>
        <input type='email' name='email' />
            <label>Password</label>
        <input type='password' name='password' />
        <button type='submit'>Login</button>
        </form>
        `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "123") {
        req.session = { isLogin: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.isLogin) {
        res.send(`
            <div>Welcome Your are logged in</div>
            <a href='/logout'>log out</a>
            `);
    }
    else {
        res.send(`
            <div> Your are not logged in</div>
            <a href='/login'>login</a>
            `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send(`
        <p>Welcome to protected route</p>
        <p>Login user</p>
        `);
});
