import express from 'express'

const app = express();

app.get('/api', (req, res) => {
  res.send('hello world')
})


app.listen(3001);

export default app;
