// All Requires
const router = require('express').Router();
const { createUserDataController,
    getAllUserDataController, updateUserController } = require('../controllers/userDataController');

// Routes
router.get('/api/getalluserdata/', getAllUserDataController);
router.post('/api/createuserdata/', createUserDataController);
router.put('/api/updateuserdata/:id', updateUserController);

// Export
module.exports = router;
