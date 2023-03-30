// Route du user 

const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const mongoose = require('mongoose');

const User = require('../models/user.model');

router.get('/users', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
});

router.get('/users/:id', async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
});

router.post('/users', async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await UserService.createUser(user);
    res.json(newUser);
});

router.put('/users/:id', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    const updatedUser = await UserService.updateUser(req.params.id, user);
    res.json(updatedUser);
});

router.delete('/users/:id', async (req, res) => {
    const deletedUser = await UserService.deleteUser(req.params.id);
    res.json(deletedUser);
});