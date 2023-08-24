import { Router, request } from "express";
import { getAdd, getHome, getProfile, getSay } from "../controllers/home-controllers"

const home = Router()

home.get('/home', getHome )  
home.get('/home/profile', getProfile )  
home.get('/home/add', getAdd )  
home.get('/home/say', getSay )  

export default home;