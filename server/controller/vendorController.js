    const E_vendor = require('../model/vendorModel');
    const path = require('path');

    exports.getvendor = async(req,res) => {
    res.sendFile(path.join(__dirname, '..', '..','vendorf.html'));
    };

    exports.submitvendor = async (req, res) => {
    const { name, firm_name, address,Gst,phone} = req.body;

    try {
        const record = new E_vendor({
        name: name,
        firm_name:firm_name,
        address: address,
        Gst:Gst,
        phone: phone,
        });

        await record.save();
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    };
