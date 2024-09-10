import express from 'express'
import createUser from '../controllers/user/createUser.js'
import getByIdUser from '../controllers/user/getbyidUser.js'
import listUser from '../controllers/user/listUser.js'
import updateUser from '../controllers/user/updateUser.js'
import removeUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.post('/', createUser)
router.get('/list', listUser)
router.get('/:id/', getByIdUser)
router.put('/:id', updateUser)
router.delete('/:id', removeUser)

export default router