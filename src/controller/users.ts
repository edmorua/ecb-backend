import express from 'express';
import User from '../model/user';

export default {
  /**
   * Function to create a user into the database
   * @param req request
   * @param res response
   * @returns {Object} the user created
   */
  createUser: async (req: express.Request, res: express.Response) => {
    const { body } = req
    if (!body) {
      return res.status(400).json({message: 'No se encontro el body en el request'})
    }
    const {
      user,
      estimateDate,
      carId,
    } = body
    if (!user) {
      return res.status(400).json({message: 'No se encontro user en el request'})
    }
    if (!estimateDate) {
      return res.status(400).json({message: 'No se encontro estimateDate en el request'})
    }
    if (!carId) {
      return res.status(400).json({message: 'No se encontro carId en el request'})
    }
    try {
      const newUser = new User({ user, estimateDate: new Date(estimateDate), carId })
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
    const { params } = req
    if (!params) {
      return res.json(400).json({message: 'No se encontro params en el request'})
    }
    const id = params.id
    if (!id) {
      return res.json(400).json({message: 'No se encotro el id'})
    }
    try {
      const query = User.findOne({ "_id": id })
      const userFound = await query.exec()
      return res.json({ user: userFound.toJSON() })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({message: error.message || 'No se encontro el usuario en la base de datos.'})
    }
  }

}