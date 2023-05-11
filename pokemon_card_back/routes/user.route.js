// Route du user 

const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const mongoose = require('mongoose');

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });
    const newUser = await UserService.createUser(user);
    res.json(newUser);
});

router.put('/:id', async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };
    const updatedUser = await UserService.updateUser(req.params.id, user);
    res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
    const deletedUser = await UserService.deleteUser(req.params.id);
    res.json(deletedUser);
});

router.post('/login', async (req, res) => {
    console.log(req.body.username, req.body.password);
    const user = await UserService.loginUser(req.body.username, req.body.password);
    res.json(user);
});

router.post('/disconnect', async (req, res) => {
    console.log(req.body.token);
    const user = await UserService.disconnectUser(req.body.token);
    res.json(user);
});

module.exports = router;