const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;  // Use environment variable
console.log('MongoDB URI:', uri);  // Debugging line
mongoose.connect(uri)
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Registration = mongoose.model('Registration', registrationSchema);

// Routes
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const newRegistration = new Registration({ name, email, password });

  try {
    const savedUser = await newRegistration.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

app.get('/registrations', async (req, res) => {
  const { search } = req.query;
  let query = {};

  if (search) {
    query = {
      $or: [
        { name: new RegExp(search, 'i') },
        { email: new RegExp(search, 'i') }
      ]
    };
  }

  try {
    const registrations = await Registration.find(query);
    res.status(200).json(registrations);
  } catch (error) {
    res.status(400).json('Error fetching users');
  }
});

app.delete('/register/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.status(200).json('User deleted successfully');
  } catch (error) {
    res.status(400).json('Error deleting user');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
