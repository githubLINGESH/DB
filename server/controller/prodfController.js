    const path = require('path');
    const e_prod = require('../model/prodfModel');

    exports.getpage = async(req,res) => {
    res.sendFile(path.join(__dirname, '..', '..','prodf.html'));
    };

    exports.submitTask = async (req, res) => {
    const { Item_code ,Item_name , category , description, unit , price} = req.body;

    try {
        const record = new e_prod({
            Item_code : Item_code,
            Item_name : Item_name,
            category  : category,
            description: description,
            unit :unit,
            price : price
        });

        await record.save();
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    };
