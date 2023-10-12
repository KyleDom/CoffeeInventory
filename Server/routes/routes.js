const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/controllers');



router.post('/api/coffee', coffeeController.addCoffee);
router.get('/api/coffee', coffeeController.getAllCoffees);
router.get('/api/coffee/:id', coffeeController.getCoffeeById);
router.delete('/api/coffee/:id', coffeeController.deleteCoffeeById);

module.exports = router;