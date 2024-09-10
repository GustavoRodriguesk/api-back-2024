import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res) => {
    const {id} = req.params
    
    try {
        const account = await deleteAccount(+id)
        
    }
    catch(error) {
        console.log(error) 
        return res.status(404).json({
            error 'conta ${id}, não tem'
        })
    }
    const account = await deleteAccount(+id)

    if(!account)
        return res.status(404).json({
            error: `Conta com o id ${id}, não encontrado!`
        })

    return res.json({
        success: "Conta removida com sucesso!",
        account
    })
}

export default remove