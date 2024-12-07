const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const auth = require('./routes/auth');
const blog = require('./routes/blog');
const contactRoutes = require('./routes/contact');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', auth);
app.use('/api/blogs', blog);
app.use('/api/contact', contactRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    //  useNewUrlParser: true, 
    // useUnifiedTopology: true 
    })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

app.listen(process.env.PORT, () => {
  console.log('Server running on ${PORT}');
});
