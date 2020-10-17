const express = require('express');
const notesController = require('../controllers/notesController');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

router.get('/', notesController.getNotes);
router.post('/add', checkAuth, notesController.addNotes);
router.delete('/remove/:id', checkAuth, notesController.removeNote);
router.put('/update/:id', checkAuth, notesController.updateNote);

module.exports = router;