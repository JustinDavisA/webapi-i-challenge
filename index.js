// implement your API here

const express = require('express');

const db = require('./data/db.js');

const server = express();

// CRUD

// Create
server.post('/hubs', (req, res) => {
    const hubInfo = req.body;

    console.log('hub information', hubInfo);

    db.hubs
        .add(hubInfo)
        .then(hub => {
            res.status(201).json(hub);
        })
        .catch(error => {
            res.status(500).json({ message: 'error creating the hub' });
        });
});

// Read
server.get('/', (req, res) => {
});

// Update
server.put('/', (req, res) => {
});

// Delete
server.delete('/hubs/:id', (req, res) => {
    const id = req.params.id;

    db.hubs
        .remove(id)
        .then(deleted => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(500).json({ message: 'error deleting the hub' });
        });
});