import express from 'express';
import userModel from '../model/user'

export default {
  /**
   * Function to create a user into the database
   * @param req request
   * @param res response
   * @returns {Object} the user created
   */
  createUser: async (req: express.Request, res: express.Response) => {
    const { body } = req
    const {
      user,
      estimateDate,
      carId,
    } = body
    try {
      const newUser = new userModel({ user, estimateDate: new Date(estimateDate), carId })
      const userSaved = await newUser.save()
      return res.json({user: userSaved.toJSON()})
    } catch (error) {
      console.log(error.message)
      return res.status(error.status || 500).json({
        message: error.message || 'No se pudo guardar los datos'
      })
    }
  },
  /**
   * Function to obtain a user from the database give it's Id
   * @param req request
   * @param res response
   */
  getUser: async (req: express.Request, res: express.Response) => {
    return res.json({hola: 'testito'})
  }

}