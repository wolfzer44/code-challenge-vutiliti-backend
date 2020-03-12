import jwt from 'jsonwebtoken'
export default async (req, res, next) => {
  try {
    const { token } = req.headers
    await jwt.verify(token, '8hgkgvrdrq')
    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token!' })
  }
}
