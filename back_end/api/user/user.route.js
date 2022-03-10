const UserService = require('./user.service');

const AuthService = require('../../component/auth/auth.service');

const Config = require('../../config/config');

const index = `${Config.server.context}/api/user`

const join = link => index + (link != null ? link : '');

module.exports = (app) => {
    app.post(join('/'), this.login);

}

this.login = async (req, res) => {
    try {
        const  user  = req.body;
        let result = await UserService.findOne({username: user.username})
        console.log("1")
        if (result && result._id) {
            await AuthService.login(req, res, result)
        }
    } catch (err) {
        res.status(400).send(err);
    }
    
    // res.status(200).send(result);
}