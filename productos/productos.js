import {Router} from 'express'
import { connectDB } from "../db.js";

const router = Router()

router.get('/productos', async (req, res) => {
    res.send('productos')
})

export default router