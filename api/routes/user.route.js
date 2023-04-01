import express from 'express'
import { fn } from '../controllers/user.controller.js'

const router = express.Router()



router.get('/', fn)

export default router;