function verificaLogin(req, res, next)
{
    if(req.session.login != undefined)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }
}

module.exports = verificaLogin;