// All Requires
const router = require('express').Router();
const { getAllSectorsController, createSectorController } = require('../controllers/sectorsController');

// Routes
router.get('/api/getallsectors/', getAllSectorsController);
router.post('/api/createsectors/', createSectorController);

// Export
module.exports = router;
