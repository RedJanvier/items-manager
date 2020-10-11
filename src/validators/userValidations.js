const Joi = require("joi")

const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()

})

module.exports = {
    userValidationSchema
}