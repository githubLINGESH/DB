    const E_labour = require('../model/labourfModel');
    const path = require('path');

    exports.getlabour = async(req,res) => {
    res.sendFile(path.join(__dirname, '..', '..','labourf.html'));
    };

    exports.submitlabour = async (req, res) => {
    const { name, phone, Category, wages_per_shift} = req.body;

    try {
        const record = new E_labour({
        name: name,
        phone: phone,
        Category: Category,
        wages_per_shift: wages_per_shift
        });

        await record.save();
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    };
