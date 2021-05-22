import {Router} from 'express'
const router = Router();
import * as discCtrl from './discos.controllers'


router.get('/discos',discCtrl.getDiscos);

router.get('/discos/:id',discCtrl.getDisco);

router.post('/discos',discCtrl.createDisco);

router.delete('/discos/:id',discCtrl.deleteDisco);

router.put('/discos/:id',discCtrl.updateDisco);

export default router