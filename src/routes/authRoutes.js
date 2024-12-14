const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', userId: req.userId });
});

module.exports = router;
