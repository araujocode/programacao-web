const Professor = require('../models/Professor');

// Listar todos os professores
exports.listarProfessores = async (req, res) => {
    try {
        const professores = await Professor.find();
        res.json(professores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Buscar um professor específico por ID
exports.buscarProfessorPorId = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Listar todas as turmas de um professor específico
exports.listarTurmasProfessor = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor.turmas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar dados de um professor específico
exports.atualizarProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Adicionar uma nova turma para o professor
exports.adicionarTurma = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) return res.status(404).json({ message: 'Id não existente' });

        professor.turmas.push(req.body);  // req.body deve conter {codigo, disciplina, alunos}
        await professor.save();
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Listar todos os professores de um departamento específico
exports.listarProfessoresPorDepartamento = async (req, res) => {
    try {
        const professores = await Professor.find({ departamento: req.params.departamento });
        res.json(professores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Remover um professor pelo ID
exports.removerProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndDelete(req.params.id);
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json({ message: 'Professor removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.adicionarProfessor = (req, res) => {
    const novoProfessor = new Professor(req.body);
    novoProfessor.save()
        .then(professor => res.status(201).json(professor))
        .catch(error => res.status(400).json({ error: error.message }));
};