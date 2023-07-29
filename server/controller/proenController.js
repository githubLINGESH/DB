const e_products = require('../model/prodModel');
const path = require('path');

exports.getproenPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'proen.html'));
};

// Controller to handle material outward form submission
exports.createproen = async (req, res) => {
  try {
    const { Vendor_name, Name_of_Material,Supplied_quantity } = req.body;

    // Find the material inward entry by vendor name
    const productInward = await e_products.findOne({ Vendor_name,Name_of_Material });

    if (!productInward) {
      return res.status(404).json({ error: 'Material not found' });
    }

    // Calculate the updated supplied quantity after outward
    const updatedSupplied = productInward.Supplied_quantity + parseInt(Supplied_quantity);

    // Update the supplied quantity in the material inward entry
    productInward.Supplied_quantity = updatedSupplied;

    // Save the updated material inward entry
    await productInward.save();

    // Send a JSON response with the updated material inward entry
    res.json({ productInward, message: 'Material outward saved successfully' });
  } catch (error) {
    console.error('Error saving material outward', error);
    res.status(500).json({ error: 'Error saving material outward' });
  }
};

// Controller to get all materials for the material outward page
exports.getMaterials = async (req, res) => {
  try {
    const materials = await e_products.find();
    res.status(200).json(materials);
  } catch (error) {
    console.error('Error retrieving materials:', error);
    res.status(500).send('Error retrieving materials.');
  }
};
