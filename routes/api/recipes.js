const express = require('express');
const router = express.Router();

// @route   GET api/recipes/test
// @desc    Tests recipes route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Recipes Works' }));

// @route   POST api/recipes
// @desc    Post recipes by category
// @access  Public

module.exports = router;
