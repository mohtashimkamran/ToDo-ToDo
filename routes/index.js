const express = require('express');
const router = express.Router();

const home_control = require('../controllers/home_control');

router.get('/', home_control.home_action);

router.post('/add-task', home_control.add_task_action);

router.post('/delete-tasks', home_control.delete_task_action);


module.exports = router;