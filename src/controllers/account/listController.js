import router from "../../routers/accountRouter.js"

const list = (req, res) => {
    res.json({message: "Rota de GET Account/List"})
}

export default list