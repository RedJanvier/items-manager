const express = require('express');
const models = require('../database/models/item');
exports.updateTaken = async (req, res) => {
  const {taken} = req.body;
const {itemId} = req.params;
const item = await models.update({ taken }, {
  where: {
    id: itemId
  }
});
res.status(200).json({success: true, data: item });
};
