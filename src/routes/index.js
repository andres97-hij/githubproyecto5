const express = require('express');
const router = express.Router();

router.get('/', (req, res, ) => {
    res.send('holita');
});

module.exports = router;