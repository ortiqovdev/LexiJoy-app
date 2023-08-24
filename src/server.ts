import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import cookieParser from "cookie-parser";
import router from './routes/routes'
import home from './routes/home.routes'

const server = express()

server.use(cors())
server.use(express.json())
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }))
server.use("/", express.static("public"))

server.engine('.hbs', engine({ extname: ".hbs" }))
server.set('view engine', '.hbs')
server.set("views", "./src/views");

server.use(router);
server.use(home);

// 404 not found
server.use((req, res, next) => {
   res.status(404).render("error/errorMassage")
})

const PORT = process.env.PORT || 5100
server.listen(PORT, () =>{
   console.log(`Server is running on port ${PORT}`)
})