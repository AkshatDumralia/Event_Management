const express = require('express');
const db = require('../database');
const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ users: rows });
  });
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.run(`INSERT INTO users(name, email) VALUES (?, ?)`, [name, email], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
