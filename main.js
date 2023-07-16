        const express = require('express');
        const loginRouter = require('./login.js');
        const matRouter = require('./mat.js');
        const contractRouter = require('./contract.js');
        const attRouter = require('./Att.js');
        const addLabourRouter = require('./Add-labour.js');
        const taskSearchRouter = require('./tasksearch.js');
        const mongoose = require('mongoose')

        const app = express();
        const port = process.env.PORT || 3000;

        const dbURL = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';
            mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Connected to MongoDB');
                // Start the server only after successful database connection
                app.listen(port, () => {
                console.log(`Server started on http://localhost:${port}`);
                });
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB', error);
            });

        app.use(express.static(__dirname));

        // Mount the routers on the corresponding paths
        app.use('/login', loginRouter);
        app.use('/mat', matRouter);
        app.use('/contract', contractRouter);
        app.use('/att', attRouter);
        app.use('/add-labour', addLabourRouter);
        app.use('/task-search', taskSearchRouter);


