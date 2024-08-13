import express from 'express'
import listController from '../controllers/account/listController.js'
import getidController from '../controllers/account/getidController.js'
import putController from '../controllers/account/putController.js'
import deleteController from '../controllers/account/deleteController.js'
import createController from '../controllers/account/createController.js'


const router = express.Router()

router.post('/', createController )
router.get('/list', listController )

router.get('/:id', getidController)
router.put('/:id', putController )
router.delete('/:id', deleteController )

export default router