const app = require('./app'); // Use require to import your Express app

const port = process.env.RUNNING_PORT || 8080;
console.log(port);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

