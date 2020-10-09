const db = require("../database/models/index")
const Item = db.Item
    // creating an item 
exports.createItem = async(req, res) => {
        let { name, category } = req.body
        if (!name) return res.status(400).send({ error: "Please provide a name" })

        if (!category) return res.status(400).send({ error: "Please provide a category" })

        const item= await Item.create({
            name,
            category,
            taken:false
        })
        res.status(201).send({ data: item })

    }
    // Retrieve all items
exports.findItems = (req, res) => {
    db.Item.findAll()
        .then(items => res.status(200).send({ data: items }))
        .catch(err => {
            res.status(400).send({ error: err })
        })

}