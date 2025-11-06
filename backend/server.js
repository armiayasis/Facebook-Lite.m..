
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Demo data
const users = {
  '1234567890': {
    name: 'Juan Dela Cruz',
    accountNumber: '1234567890',
    pin: '1234',
    balance: 50000.00
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'STAR Mobile Bank API is running!' });
});

app.post('/api/login', (req, res) => {
  const { accountNumber, pin } = req.body;
  const user = users[accountNumber];
  
  if (user && user.pin === pin) {
    res.json({
      success: true,
      user: {
        name: user.name,
        accountNumber: user.accountNumber,
        balance: user.balance
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid account number or PIN'
    });
  }
});

app.get('/api/balance/:accountNumber', (req, res) => {
  const user = users[req.params.accountNumber];
  if (user) {
    res.json({ balance: user.balance });
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`STAR Mobile Bank Backend running on port ${PORT}`);
});
