    const s_materials = require('../model/materialModel');
    const path = require('path');

    exports.getp = (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'matout.html'));
    };

// Controller to handle material outward form submission
    exports.createMaterialOut = async (req, res) => {
    try {
        const { Vendor_name, Used_quantity } = req.body;

        // Find the material inward entry by vendor name
        const materialInward = await s_materials.findOne({ Vendor_name });

        if (!materialInward) {
            return res.status(404).json({ error: 'Material not found' });
        }

        // Calculate the updated supplied quantity after outward
        const updatedSupplied = materialInward.Supplied_quantity - parseInt(Used_quantity);

        // Update the supplied quantity in the material inward entry
        materialInward.Supplied_quantity = updatedSupplied;

        // Save the updated material inward entry
        await materialInward.save();

        // Send a JSON response with the updated material inward entry
        res.json({ materialInward, message: 'Material outward saved successfully' });
    } catch (error) {
        console.error('Error saving material outward', error);
        res.status(500).json({ error: 'Error saving material outward' });
    }
};

    // Controller to render the material outward page
    exports.getMaterialOutPage = async (req, res) => {
        try {
            const Materials = await s_materials.find();
            res.status(200).json(Materials);
        } catch (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).send('Error retrieving tasks.');
        }
        };
