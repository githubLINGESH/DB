    const path = require('path');
    const Material = require('../model/materialModel');

    exports.getMaterialPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','mat.html'));
    };

    exports.submitMaterial = async (req, res) => {
    const { Vendor_name, Name_of_Material, Required_quantity, Supplied_quantity, Unit_prize, Date, Current_stock, Pay_expenses } = req.body;

    try {
        const record = new Material({
        Vendor_name: Vendor_name,
        Name_of_Material: Name_of_Material,
        Required_quantity: parseInt(Required_quantity),
        Supplied_quantity: parseInt(Supplied_quantity),
        Unit_prize: parseInt(Unit_prize),
        Date: new Date(Date),
        Current_stock: parseInt(Current_stock),
        Pay_expenses: parseInt(Pay_expenses),
        });

        await record.save();
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    };

    exports.getTasks = async (req, res) => {
    try {
        const tasks = await Material.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }
    };
