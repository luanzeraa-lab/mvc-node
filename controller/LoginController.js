
const loginModel = require('../model/LoginModel')


const login = new loginModel();

const logged = login.isLogged()

exports.getLogin = (( req, res) =>{
    res.send(`<h1>${logged}</h1>`)
    });

exports.getIsLogged = ((req, res) =>{
    res.render("LoginView", {logged : logged});
})