import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDb from './db/connect'
import userRoute from './routes/users'
import carRoute from './routes/cars'
dotenv.config()
const app = express();
const port = process.env.PORT // default port to listen

const options: cors.CorsOptions = {
	allowedHeaders: [
		'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
	],
	credentials: true,
	methods: 'GET, POST',
	origin: '*'
}
app.use(cors(options))
app.use(bodyParser.json())
app.options('*', cors(options))
app.use('/user', userRoute)
app.use('/car', carRoute)

connectDb(process.env.MONGO_DB)

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});