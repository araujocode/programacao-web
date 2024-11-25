// Lógica para obter todos os usuários
exports.getAllUsers = (req, res) => {
    res.json({ "mensagem": "Obter todos os usuários" });
};
// Lógica para criar um novo usuário
exports.createUser = (req, res) => {
    res.status(201).json({ "mensagem": "Inserir um novo usuário" });
};
