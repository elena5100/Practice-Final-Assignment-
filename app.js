const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');  // Ensure this line is present

let workouts = [];

app.get('/', (req, res) => {
    res.render('home');  // Ensure 'home.ejs' exists in 'views' folder
});

app.post('/log', (req, res) => {
    const { workoutType, duration, intensity, date, notes } = req.body;
    workouts.push({ workoutType, duration, intensity, date, notes });
    res.redirect('/summary');
});

app.get('/summary', (req, res) => {
    res.render('summary', { workouts });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
