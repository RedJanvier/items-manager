import { Item as _Item } from "../database/models/index"
const Item = _Item
    // creating an item 
export async function createItem(req, res) {
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
export function findItems(req, res) {
    _Item.findAll()
        .then(items => res.status(200).send({ data: items }))
        .catch(err => {
            res.status(400).send({ error: err })
        })

}