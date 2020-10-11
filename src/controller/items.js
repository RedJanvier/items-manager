const db = require("../database/models/index")
const Item = db.Item
let newItem;
// creating an item 
exports.createItem = async(req, res) => {
        let { name, category } = req.body
        try {
            if (!name) return res.status(400).send({ error: "Please provide a name" })

            if (!category) return res.status(400).send({ error: "Please provide a category" })

            newItem = await Item.create({
                name,
                category,
                taken: false
            })

            res.status(201).send({ data: newItem })
        } catch (err) {
            res.status(400).send({ error: err })
        }


    }
    // Retrieve all items
exports.findItems = (req, res) => {
    db.Item.findAll()
        .then(items => res.status(200).send({ data: items }))
        .catch(err => {
            res.status(400).send({ error: err })
        })

}