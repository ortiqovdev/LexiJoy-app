import { Router, request } from "express";
import { getAbout, getBlog, getContact, getIndex, getLogin, getSign } from "../controllers/controllers";

const router = Router();

router.get('/', getIndex ) 
router.get('/about', getAbout ) 
router.get('/contact', getContact ) 
router.get('/blog', getBlog ) 
router.get('/login', getLogin ) 
router.get('/sign-in', getSign ) 


export default router;