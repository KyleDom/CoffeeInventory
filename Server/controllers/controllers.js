
const db = require('../models'); 

const addCoffee = async (req, res) => {
    try {
        const { name, price, quantity } = req.body; 

        const newCoffee = await db.Coffee.create({ name, price, quantity }); 

        res.status(200).json(newCoffee); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllCoffees = async (req, res) => {
    try {
        const allCoffees = await db.Coffee.findAll();
        res.status(200).json(allCoffees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



const getCoffeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const coffee = await db.Coffee.findByPk(id);
        if (!coffee) {
            return res.status(404).json({ message: 'Coffee not found' });
        }
        res.status(200).json(coffee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteCoffeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const coffee = await db.Coffee.findByPk(id);
        if (!coffee) {
            return res.status(404).json({ message: 'Coffee not found' });
        }
        await db.Coffee.destroy({ where: { id } });
        res.status(200).json({ message: 'Coffee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { addCoffee, getAllCoffees, getCoffeeById, deleteCoffeeById};

