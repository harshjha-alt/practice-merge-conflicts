// create a simple server using express
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World this is Harsh from EC2!');
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
    