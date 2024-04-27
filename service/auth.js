// const sessionIdToUserMap = new Map()    // hashmap
const jwt = require("jsonwebtoken")
const secret = "Danish$123@$"           // who ever have this key will make the tokens
function setUser(user) {
    // return sessionIdToUserMap.set(id, user)
    const payload = {
        _id: user._id,
        email: user.email
    }
    return jwt.sign(payload, secret);       // this function makes token
}

function getUser(token) {
    if(!token)  return null;
    // return sessionIdToUserMap.get(id)
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return res.send(error)
    }
}

module.exports = {
    setUser,
    getUser
}