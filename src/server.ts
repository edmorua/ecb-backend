import express from 'express'
import dotenv from 'dotenv'
import userController from './routes/users'
dotenv.config()
const app = express();
const port = process.env.PORT // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
});

app.use('/user', userController)
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );