const db = require("../database/models/index")
const { userValidationSchema } = require("../validators/userValidations")
const bcrypt = require("bcrypt")
const User = db.User
let newUser;
// creating an User 
exports.createUser = async(req, res) => {
    const emailExists = await User.find({
        where: {
            email: req.body.email
        }
    })
    if (emailExists) return res.status(400).send({ error: "Email already taken ." })
    try {
        result = await userValidationSchema.validateAsync(req.body)
        const salt = await bcrypt.genSalt(10)
        hashedPassword = await bcrypt.hash(req.body.password, salt)
        newUser = await User.create({
            email: req.body.email,
            password: hashedPassword
        })
        res.status(201).send({ user: newUser })
    } catch (err) {
        res.status(400).send({ error: err })
    }


}