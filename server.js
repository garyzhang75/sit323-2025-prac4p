const express = require("express");
const app = express();
const port = 3000;

// Function to validate inputs
const validateNumbers = (num1, num2) => {
  return !isNaN(num1) && !isNaN(num2);
};

// Addition
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }
  res.json({ result: num1 + num2 });
});

// Subtraction
app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }
  res.json({ result: num1 - num2 });
});

// Multiplication
app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }
  res.json({ result: num1 * num2 });
});

// Division
app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: num1 / num2 });
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running on http://localhost:${port}`);
});
