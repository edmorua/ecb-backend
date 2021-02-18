import express from 'express';
import jsonCars from '../../cars.json'

export default {
  /**
   * Function to obtain the car in the json cars if the /:id exists
   * @param req Client's Request
   * @param res Server's Response
   */
  getCar: async (req: express.Request, res: express.Response) => {
    const { params } = req
    const id = params?.id
    const car = jsonCars.find(element => element.id === parseInt(id, 10))
    if (!car) {
      return res.status(400).json({error: 'no car found'})
    }
    return res.json(car)
  },
  /**
   * Function to obtain all the cars in the json cars
   * @param req Client's Request
   * @param res Server's Response
   */
  getCars: async (req: express.Request, res: express.Response) => {
    return res.json(jsonCars)
  }
}