require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

// Connexion MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connecté à MongoDB');
  })
  .catch((err) => {
    console.log('Erreur de connexion MongoDB:', err);
  });

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Serveur fonctionnant' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
