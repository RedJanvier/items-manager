const models = require('../database/models/item')


const getItemById = async (req, res) => {
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

  const deleteItem = async (req, res) => {
    try {
      const { itemId } = req.params;
      const deleted = await models.destroy({
        where: { id: itemId }
      });
      if (deleted) {
        return res.status(204).send("Item deleted");
      }
      throw new Error("Item not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  module.exports = {
    getItemById,
    deleteItem,
  }