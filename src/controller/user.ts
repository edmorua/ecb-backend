import express from 'express';


export default {
  /**
   *
   * @param req request
   * @param res response
   * @returns {Object} the user created
   */
  createUser: async (req: express.Request, res: express.Response) => {
    return res.json({hola: 'holiwi'})
  },

  getUser: async (req: express.Request, res: express.Response) => {
    return res.json({hola: 'testito'})
  }

}