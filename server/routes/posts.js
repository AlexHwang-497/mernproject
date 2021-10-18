import express from 'express'
import { getPosts} from '../controllers/posts.js';


const router = express.Router()
 
router.get('/', (req,res) => {
     res.send('this works!!!')
 })

export default router