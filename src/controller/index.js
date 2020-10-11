import { Item as models } from '../database/models/index';


export async function getItemById( req, res)  {
    try {
      const { itemId } = req.params;
      const item = await models.findOne({
        where: { id: itemId }
      });
      if (item) {
        return res.status(200).json({ item });
      }
      return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  export async function deleteItem  (req, res)  {
    try {
      const { itemId } = req.params;
      const deleted = await models.destroy({
        where: { id: itemId }
      });
      if (deleted) {
        return res.status(200).send("Item deleted");
      }
      throw new Error("Item not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };