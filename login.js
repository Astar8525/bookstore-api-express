// Task 7: Login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    user ? res.json({ message: 'Login successful' }) : res.status(401).json({ message: 'Invalid credentials' });
});
