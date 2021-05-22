import {Router} from 'express'
import {Request, Response, NextFunction} from 'express'
const router = Router();
import * as userCtrl from './Users.controllers'
import {TokenValidation} from '../libs/verifyToken'



router.post('/signin',userCtrl.login);//recibir, van a enviar//signin
router.post('/signup',userCtrl.signup);
//router.get('/profile', TokenValidation, userCtrl.profile);
//router.get('/profile', TokenValidation ,(req: IGetUserAuthInfoRequest, res: Response),userCtrl.profile);//van a pedir datos 


export default router