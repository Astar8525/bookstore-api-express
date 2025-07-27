// Task 13: Search by Title
app.get('/promise/title/:title', (req, res) => {
    const results = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json(results);
});
