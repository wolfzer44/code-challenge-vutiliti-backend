import Users from '../../models/Users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  const { username, password } = req.body

  const user = await Users.findOne({ username })

  console.log(await bcrypt.compare(password, user.password))

  if (!await bcrypt.compare(password, user.password)) return res.status(401).json({ message: 'Invalid credentials' })

  const token = await jwt.sign({
    id: user.id,
    username: user.username
  }, '8hgkgvrdrq', { expiresIn: '7d' })

  return res.status(200).json({ token, user_id: user.id })
}
