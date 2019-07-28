require('dotenv').config()

const { User } = require('../models')

class AuthController {
  create (req, res) {
    res.render('auth/signin')
  }

  async login (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log('Usuário não encontrado')
      res.redirect('/')
    }

    if (!(await user.checkPassword(password))) {
      console.log('Senha incorreta')
      res.redirect('/')
    }

    req.session.user = user

    return res.redirect('/dashboard')
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie(process.env.SESSION)
      res.redirect('/')
    })
  }
}

module.exports = new AuthController()
