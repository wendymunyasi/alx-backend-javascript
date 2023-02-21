import { AppController } from '../controllers/AppController';
import { StudentsController } from '../controllers/StudentsController';

const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Route for getting all students or students by major
router.get('/students/:major?', StudentsController.getAllStudents);

export default router;
