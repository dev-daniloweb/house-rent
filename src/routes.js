const routes = require('express').Router()
const multerConfig = require('./config/multer')
const multer = require('multer')
const upload = multer({ storage: multerConfig })

const authMiddleware = require('./app/middleware/auth')
const guestMiddleware = require('./app/middleware/guest')

const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')

routes.get('/', guestMiddleware, AuthController.create)
routes.post('/signin', AuthController.login)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/dashboard', authMiddleware)

routes.get('/dashboard', (req, res) => {
  res.render('dashboard/dashboard')
})

module.exports = routes
