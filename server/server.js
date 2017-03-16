import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/rams_projects');

const app = express();

app.get('/api', (req, res) => {
  res.send('hello world')
})


app.listen(3001);

export default app;
