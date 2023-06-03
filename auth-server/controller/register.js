const ClientApp=require('../schemas/client_app');
const M2M = require('../schemas/m2m');
const User=require('../schemas/user')
var uuid=require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    registerApp: async function (req, res, next) {
        res.render("app-register.ejs");
    },
    registerAppBackend: async function (req, res, next) {
        app_name=req.body.app_name
        redirect_url=req.body.redirect_url
        if(app_name==undefined||app_name==""||redirect_url==undefined||redirect_url==""){
            res.status(400);
            res.end();
        }else{
            const new_app = new ClientApp({ "name": app_name, "redirect_url": redirect_url });
            new_app.save();
            res.json({"client_id":new_app._id})
        }
    },
    registerM2M: async function (req, res, next) {
        res.render("m2m-register.ejs");
    },
    registerM2MBackend: async function (req, res, next) {
        app_name=req.body.app_name
        if(app_name==undefined||app_name==""){
            res.status(400);
            res.end();
        }else{
            var client_secret=uuid.v4();
            bcrypt.hash(client_secret, saltRounds, function(err, hash) {
                const new_app = new M2M({ "name": app_name, "client_secret": hash });
                new_app.save();
                res.json({"client_id":new_app._id,"client_secret":client_secret})
            });
        }
    },
    registerUser: async function (req, res, next) {
        client_id=req.query.client_id
        redirect_url=req.query.redirect_url
        code_challenge=req.query.code_challenge
        state=req.query.state
        res.render("user-register.ejs",{
            client_id:client_id,
            redirect_url:redirect_url,
            code_challenge:code_challenge,
            state:state
        });
    },
    registerUserBackend: async function (req, res, next) {
        username=req.body.username
        u_name=req.body.name
        password=req.body.password
        image=req.body.image
        if(username==undefined||username==""||u_name==undefined||u_name==""||password==undefined||password==""||image==undefined||image==""){
            res.status(400);
            res.end();
        }else{
            bcrypt.hash(password, saltRounds, function(err, hash) {
                const new_user = new User({ "username": username, "name": u_name , "password": hash, "image": image});
                new_user.save();
                res.end();
            });            
        }
    },
}