const contracts = require('../model/contractModel');
const path = require('path');

exports.getpage = async (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'cont.html'));
};

exports.submitTask = async (req, res) => {
  const { w_name, phone, w_type, sal, shift, start, end } = req.body;

  try {
    console.log('Received data:', req.body);

    const record = new contracts({
      w_name: w_name,
      phone: phone,
      w_type: w_type,
      sal: sal,
      shift: shift,
      start: start,
      end: end,
      pa: 0
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
    const tasks = await contracts.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).send('Error retrieving tasks.');
  }
};

// Function to update the "pa" field when marking Present/Absent
exports.markAttendance = async (req, res) => {
  try {
    const { workerId, status } = req.body;

    // Find the contract in the database by ID
    const contract = await contracts.findById(workerId);

    if (!contract) {
      return res.status(404).json({ message: 'Contract not found' });
    }

    // Update the "pa" field with the given status
    contract.pa = status === 'Present' ? 1 : 0;
    await contract.save();

    return res.status(200).json({ message: 'Attendance marked successfully', contract });
  } catch (error) {
    console.error('Error marking attendance:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
