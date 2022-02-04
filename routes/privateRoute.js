/* access only register users */
const router = require("express").Router()
const verify = require('./verifyToken')

// restrict access without token to this route
router.get('/', verify, (req, res) => {
    // access to verified user
    res.send(req.user)
})

module.exports = router
