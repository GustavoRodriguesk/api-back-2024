import router from "../../routers/authRouter.js"

const logout = (req, res) => {
    res.json({message: "Rota de POST Auth/Logout"})
}
export default logout