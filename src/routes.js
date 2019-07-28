const routes = require('express').Router()
const multerConfig = require('./config/multer')
const multer = require('multer')
const upload = multer({ storage: multerConfig })

const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')

routes.get('/', AuthController.create)
routes.post('/signin', AuthController.login)

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.get('/dashboard', (req, res) => {
  res.render('dashboard/dashboard')
})

module.exports = routes
