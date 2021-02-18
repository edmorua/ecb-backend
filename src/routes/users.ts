import express from 'express'
import userController from '../controller/users'
const router = express.Router()

router.post('/',userController.createUser)
router.get('/:id',userController.getUser)

export default router
