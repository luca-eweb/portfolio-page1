const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/get-api-key', (req, res) => {
    const filePath = `${process.env.HOME}/config/my_api_keys`;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei' });
        }
        const apiKey = data.split('=')[1]?.trim(); // Annahme: API_KEY=dein_api_key
        res.json({ apiKey });
    });
});

app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));