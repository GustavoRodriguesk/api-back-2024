import { getByIdUser } from "../../models/userModel.js";

const getByIdUsers = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await getByIdUser(parseInt(id, 10));

        if (!user) {
            return res.status(404).json({
                error: `Conta com o id ${id} não encontrada!`
            });
        }

        return res.json({
            success: "Conta encontrada com sucesso!",
            user
        });
    } catch (error) {
        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
};

export default getByIdUsers;
