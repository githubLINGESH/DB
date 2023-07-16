    const express = require('express');
    const loginRouter = require('./login.js');
    const matRouter = require('./mat.js');
    const contractRouter = require('./contract.js');
    const attRouter = require('./Att.js');
    const addLabourRouter = require('./Add-labour.js');
    const taskSearchRouter = require('./tasksearch.js');
    const router = express.Router();



    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.static(__dirname));

    // Mount the routers on the corresponding paths
    app.use('/login', loginRouter);
    app.use('/mat', matRouter);
    app.use('/contract', contractRouter);
    app.use('/att', attRouter);
    app.use('/add-labour', addLabourRouter);
    app.use('/task-search', taskSearchRouter);

    // Start the server
    app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    });
