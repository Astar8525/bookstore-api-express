// Task 12: Search by Author
app.get('/promise/author/:author', (req, res) => {
    const results = books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
    res.json(results);
});
