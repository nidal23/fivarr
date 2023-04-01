import express from 'express'
import { fn } from '../controllers/auth.controller.js'

const router = express.Router()



router.get('/', fn)

export default router;