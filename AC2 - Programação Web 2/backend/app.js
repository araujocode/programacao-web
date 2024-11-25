const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');

// Rotas para os professores
const professorRoutes = require('./routes/professorRoutes');

// Configurações do app
const app = express();
app.use(express.json());
app.use(cors());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log(err));

// Rotas
app.use('/professores', professorRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
