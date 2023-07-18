const L_Contract = require('../model/contractModel');
const path = require('path');

exports.getpage = async(req,res) => {
  res.sendFile(path.join(__dirname, '..', '..','contract.html'));
};

exports.submitTask = async (req, res) => {
  const { w_name, phone, w_type, start, end } = req.body;

  try {
    const record = new L_Contract({
      w_name: w_name,
      phone: phone,
      w_type: w_type,
      start: start,
      end: end,
    });

    const savedRecord = await record.save();
    console.log('Record inserted successfully.');

    res.status(200).send('Record inserted successfully.');
  } catch (error) {
    console.error('Error inserting record:', error);
    res.status(500).send('Error inserting record.');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await L_Contract.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).send('Error retrieving tasks.');
  }
};
