const E_client = require('../model/clientModel');
const path = require('path');

exports.getpage = async(req,res) => {
  res.sendFile(path.join(__dirname, '..', '..','cli_f.html'));
};

 exports.submitTask = async (req, res) => {
  const { name, phone, address} = req.body;

  try {
    const record = new E_client({
      name: name,
      phone: phone,
      address: address,
    });

    const savedRecord = await record.save();
    console.log('Record inserted successfully.');

    res.status(200).send('Record inserted successfully.');
  } catch (error) {
    console.error('Error inserting record:', error);
    res.status(500).send('Error inserting record.');
  }
};
