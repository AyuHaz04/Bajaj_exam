const express = require('express');
const router = express.Router();

let users = [];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Add a user
// Custom API for array processing
router.post('/', (req, res) => {
  try {
    const { data } = req.body;
    // Use john doe and 17091999 as default for demonstration
    const fullName = "john doe";
    const dob = "17091999";
    const response = {
      is_success: true,
      user_id: `${fullName.replace(/\s+/g, '_').toLowerCase()}_${dob}`,
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    };

    let sum = 0;
    let alphaChars = [];

    if (!Array.isArray(data)) {
      response.is_success = false;
      return res.status(400).json({ ...response, error: "Invalid input: 'data' must be an array." });
    }

    data.forEach(item => {
      if (typeof item === 'string') {
        // Check if item is a number
        if (/^-?\d+$/.test(item)) {
          const num = parseInt(item);
          sum += num;
          if (num % 2 === 0) {
            response.even_numbers.push(num.toString());
          } else {
            response.odd_numbers.push(num.toString());
          }
        }
        // Check if item is alphabetic (single or multi char)
        else if (/^[a-zA-Z]+$/.test(item)) {
          response.alphabets.push(item.toUpperCase());
          alphaChars.push(item);
        }
        // Special characters (not alphanumeric)
        else {
          response.special_characters.push(item);
        }
      }
    });

    response.sum = sum.toString();

    // Build concat_string: all alpha chars, reverse, alternating caps
    let allAlpha = alphaChars.join('');
    let reversed = allAlpha.split('').reverse().join('');
    let altCaps = '';
    for (let i = 0; i < reversed.length; i++) {
      altCaps += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }
    response.concat_string = altCaps;

    res.json(response);
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message || "Internal server error"
    });
  }
});

// Update a user
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = req.body;
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  users = users.filter(u => u.id !== id);
  res.status(204).send();
});

module.exports = router;
