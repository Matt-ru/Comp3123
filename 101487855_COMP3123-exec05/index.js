
const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

// Home page
app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'home.html'), (err) => {
        if (err) {
            next(err);
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log('Web Server is listening at port ' + PORT);
});
