
const express = require('express');
const routerUser = express.Router();
const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '..', 'user.json');

// GET /profile - Return user details as JSON
routerUser.get('/profile', (req, res) => {
    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Server Error'
            });
        }

        try {
            const user = JSON.parse(data);
            return res.json(user);
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Server Error'
            });
        }
    });
});

// POST /login - Validate username and password
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Server Error'
            });
        }

        try {
            const user = JSON.parse(data);

            if (username !== user.username) {
                return res.json({
                    status: false,
                    message: 'User Name is invalid'
                });
            }

            if (password !== user.password) {
                return res.json({
                    status: false,
                    message: 'Password is invalid'
                });
            }

            return res.json({
                status: true,
                message: 'User Is valid'
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Server Error'
            });
        }
    });
});

// GET /logout - Display logout message in HTML
routerUser.get('/logout', (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).send('Username is required');
    }

    res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;
