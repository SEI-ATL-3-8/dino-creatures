const dinoController = require('../controllers/dinoController')
const express = require('express')
const dinoRoutes = express.Router()

dinoRoutes.get('/', dinoController.getAll)
dinoRoutes.get('/:id',dinoController.find)
dinoRoutes.post('/',dinoController.create)
dinoRoutes.put('/:id',dinoController.update)
dinoRoutes.delete('/:id',dinoController.delete)

module.exports = dinoRoutes