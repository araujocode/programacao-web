let escola = [

    {

        ra: '1',

        nome: "João",

        disciplinas: [

            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },

            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },

            { codigo: "POR101", nome: "Português", professor: "Prof. João" },

            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" }

        ]

    },

    {

        ra: '2',

        nome: "Maria",

        disciplinas: [

            { codigo: "MAT101", nome: "Matemática", professor: "Prof. Carlos" },

            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },

            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" }

        ]

    },

    {

        ra: '3',

        nome: "Pedro",

        disciplinas: [

            { codigo: "CIE101", nome: "Ciências", professor: "Prof. João" },

            { codigo: "HIS101", nome: "História", professor: "Prof. Ana" },

            { codigo: "POR101", nome: "Português", professor: "Prof. João" },

            { codigo: "GEO101", nome: "Geografia", professor: "Prof. Ana" },

            { codigo: "EDF101", nome: "Educação Física", professor: "Prof. Carlos" }

        ]

    }

];

// Exibir todos os alunos
exports.getAllAlunos = (req, res) => {
    res.json(escola);
};

// Buscar um aluno pelo RA
exports.getAlunoByRA = (req, res) => {
    const aluno = escola.find(a => a.ra === req.params.ra);
    if (aluno) res.json(aluno);
    else res.status(404).json({ message: "Aluno não encontrado" });
};

// Listar todas as disciplinas de um aluno
exports.getDisciplinasByRA = (req, res) => {
    const aluno = escola.find(a => a.ra === req.params.ra);
    if (aluno) res.json(aluno.disciplinas);
    else res.status(404).json({ message: "Aluno não encontrado" });
};

// Adicionar uma disciplina para um aluno
exports.addDisciplina = (req, res) => {
    const aluno = escola.find(a => a.ra === req.params.ra);
    if (aluno) {
        const { codigo, nome, professor } = req.body;
        aluno.disciplinas.push({ codigo, nome, professor });
        res.json({ message: "Disciplina adicionada com sucesso", aluno });
    } else {
        res.status(404).json({ message: "Aluno não encontrado" });
    }
};

// Atualizar os dados de um aluno
exports.updateAluno = (req, res) => {
    const aluno = escola.find(a => a.ra === req.params.ra);
    if (aluno) {
        const { nome, disciplinas } = req.body;
        if (nome) aluno.nome = nome;
        if (disciplinas) aluno.disciplinas = disciplinas;
        res.json({ message: "Aluno atualizado com sucesso", aluno });
    } else {
        res.status(404).json({ message: "Aluno não encontrado" });
    }
};