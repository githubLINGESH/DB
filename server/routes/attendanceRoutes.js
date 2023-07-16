const express = require('express');
const router = express.Router();
const attendanceController = require('../controller/attendanceController');

// GET home page
router.get('/', attendanceController.getAttendancePage);

// POST new attendance record
router.post('/submit-task', attendanceController.submitAttendance);

// GET all attendance records
router.get('/tasks', attendanceController.getAllAttendance);

module.exports = router;
