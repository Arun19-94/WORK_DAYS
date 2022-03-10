const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
process.env.TOKEN_SECRET;


this.login = async (req, res, user) => {
    try {
        console.log("sssssssss")
        console.log(user)
        console.log(process.env)
        const token = await (this.generateAccessToken({ user: user }));
        let result = {
            token: token,
            user: user 
        }
        console.log("zzzzzzzzzzzz")
        res.status(200).send(result);
    } catch(err) {
        console.log(err)
    }
    conso

}

this.generateAccessToken = async (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '300s' });
}