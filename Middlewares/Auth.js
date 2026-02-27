import jwt from 'jsonwebtoken'
export const isAuthenticated = async (req, res, next) => {
    const token = req.header('Auth')
    console.log("checking token", token)

    if (!token) return res.json({ message: "login first" })


    const decoded = jwt.verify(token, '!@#$$% ')
    console.log("token data=", decoded)

}