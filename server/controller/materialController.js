const path = require('path');
const e_products = require('../model/prodModel');

exports.getMaterialPage = (req, res) => {
res.sendFile(path.join(__dirname, '..', '..', 'matinf.html'));
};

exports.submitMaterial = async (req, res) => {

try {
    const {
        Date_i,
        Vendor_name,
        Name_of_Material,
        Supplied_quantity,
        Unit_prize,
        date, // Rename Date to date or any other meaningful name
        Current_stock,
        Pay_expenses,
    } = req.body;

    try {
        const record = new s_materials({
        Vendor_name: Vendor_name,
        Name_of_Material: Name_of_Material,
        Required_quantity: parseInt(Required_quantity),
        Supplied_quantity: parseInt(Supplied_quantity),
        Unit_prize: parseInt(Unit_prize),
        Date: date,
        Current_stock: parseInt(Current_stock),
        Pay_expenses: parseInt(Pay_expenses),
        });

    // Save the updated material inward entry
    await materialInward.save();
    
} catch (error) {
    console.error('Error saving material outward', error);
    res.status(500).json({ error: 'Error saving material outward' });
}
};

// Controller to render the material outward page
exports.getMaterialOutPage = async (req, res) => {
    try {
        const Materials = await e_products.find();
        res.status(200).json(Materials);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }
    };


exports.getTasks = async (req, res) => {
try {
    const tasks = await e_products.find();
    res.status(200).json(tasks);
} catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).send('Error retrieving tasks.');
}
};

exports.searchMaterial = async (req, res) => {
    const { Name_of_Material } = req.body;

    try {
        const tasks = await e_products.find({ Name_of_Material: Name_of_Material });

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error searching tasks:', error);
        res.status(500).send('Error searching tasks.');
    }
    };
