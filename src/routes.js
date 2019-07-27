const routes = require('express').Router()
const multerConfig = require('./config/multer')
const multer = require('multer')
const upload = multer({ storage: multerConfig })

const UserController = require('./app/controllers/Usercontroller')

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

module.exports = routes
