    const path = require('path');
    const e_prod = require('../model/prodfModel');

    exports.getpage = async(req,res) => {
    res.sendFile(path.join(__dirname, '..', '..','prodf.html'));
    };

    exports.submitprod = async (req, res) => {
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
        const fs = require('fs');
        const csv = require('csv-parser');
        
        exports.handleFileUploads = (req, res) => {
        const file = req.file;
        
        if (!file) {
            return res.status(400).send('No file uploaded');
        }
        
        const results = [];
        
        // Parse CSV file
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
            // Remove the temporary file
            fs.unlinkSync(file.path);
        
            // Map data to MongoDB worker documents
            const workerss = results.map((result) => ({
                Item_code: parseInt(result.Item_code),
                Item_name: result.Item_name,
                category: result.category,
                description : result.description,
                unit: parseInt(result.unit),
                price: parseInt(result.price)
            }));
        
            // Save worker documents to MongoDB
            e_prod.insertMany(workerss)
                .then(() => {
                res.send('Data imported successfully');
                })
                .catch((error) => {
                res.status(500).send('Error importing data');
                });
            });
        };

