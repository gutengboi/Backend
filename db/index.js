const mongoose = require('mongoose');

console.log('Attempting to connect to MongoDB...');
mongoose.connect('mongodb://localhost:27017/auth-app', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
})
  .then(() => {
      console.log('MongoDB connected');
  })
  .catch((err) => {
      console.error('MongoDB connection error:', err);
  });
