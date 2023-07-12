const express = require('express');
const { Button } = require('../models');

const router = express.Router();

// create button
router.post('/', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text field is required' });
  }
  const button = await Button.create({ text });
  res.status(201).json({ message: 'Button created successfully', button });
});

//add click to button
router.put('/:id/clicks', async (req, res) => {
  const { id } = req.params;
  const button = await Button.findByPk(id);
  if (!button) {
    return res.status(404).render('error', { title: 'Button not found', message: 'Button not found', error: { status: 404 } });
  }
  button.clicks += 1;
  await button.save();
  res.status(200).json({ message: 'Button updated successfully', button });
});

//find all buttons in ascending order by id
router.get('/', async (req, res) => {
  const button = await Button.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ message: 'Buttons retrieved successfully', button });
});

//find all active buttons in ascending order by id
router.get('/active', async (req, res) => {
    const buttons = await Button.findAll({ 
        where: {
            text: 'active',
        },
        order: [['id', 'ASC']]
    });
    res.status(200).json({ message: 'Buttons retrieved successfully', buttons });
});

// 'delete' inactive buttons
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text field is required' });
  }
  const button = await Button.findByPk(id);
  if (!button) {
    return res.status(404).render('error', { title: 'Button not found', message: 'Button not found', error: { status: 404 } });
  }
  button.text = text;
  await button.save();
  res.status(200).json({ message: 'Button updated successfully', button });
});

//delete button
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const button = await Button.findByPk(id);
  if (!button) {
    return res.status(404).json({ error: 'Button not found' });
  }
  await button.destroy();
  res.status(200).json({ message: 'Button deleted successfully', button });
});

module.exports = router;