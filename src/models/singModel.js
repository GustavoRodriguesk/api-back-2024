import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function loginController(req, res) {
    const { email, pass } = req.body;

    try {
        const account = await prisma.account.findUnique({ where: { email } });

        if (!account) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

    }
        
    res.json({
        id: account.id,
        nome: account.nome,
        email: account.email,
    });
 catch (exception) {
    exceptionHandler(exception, res); }}

