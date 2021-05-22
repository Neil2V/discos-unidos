import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import discoRoutes from './routes/Discos/discos.routes'
import userRoutes from './routes/Users/Users.routes'

const app = express();

app.set('port',process.env.PORT || config.PORT);


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));//operaciones basicas datos
app.use(discoRoutes);
app.use('/auth',userRoutes);

export default app;