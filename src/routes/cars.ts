import express from 'express'
import carsController from '../controller/cars'
const router = express.Router()

/**
 * Obtain all carrs
 */
router.get('/',carsController.getCars)

/**
 * Obtain the car with id {:id}
 */
router.get('/:id', carsController.getCar)



export default router
