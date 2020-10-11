import { Router } from "express"
const router = Router()
import { createItem, findItems } from '../controller/items'
import { getItemById, deleteItem } from '../controller/index'

router.post('/items', createItem)
router.get('/items', findItems)

router.get('/item/:itemId', getItemById);
router.delete('/item/:itemId',deleteItem)
export default router;
