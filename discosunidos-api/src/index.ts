import dotenv from 'dotenv'
import app from './app' 
import './database'


dotenv.config();

app.listen(app.get('port'),() => {
    console.log("server on port ",app.get('port'));
})