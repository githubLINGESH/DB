    const path = require('path');
    const s_materials = require('../model/materialModel');

    exports.getMaterialPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'matinf.html'));
    };

    exports.submitMaterial = async (req, res) => {
    const {
        Vendor_name,
        Name_of_Material,
        Required_quantity,
        Supplied_quantity,
        Unit_prize,
        Date_o, // Rename Date to date or any other meaningful name
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
        Date_o: Date_o,
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
        const tasks = await s_materials.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }
    };

    exports.searchMaterial = async (req, res) => {
        const { Name_of_Material } = req.body;
    
        try {
            const tasks = await s_materials.find({ Name_of_Material: Name_of_Material });
    
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Error searching tasks:', error);
            res.status(500).send('Error searching tasks.');
        }
        };
