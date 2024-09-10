import { listUsers } from "../../models/userModel.js" 

const list = async (req, res) => {
    const users = await listUsers()
    return res.json({
        message: "Contas listadas com sucesso!",
        users
    })
}

export default list