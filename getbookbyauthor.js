// Task 3: Get books by author
app.get('/books/author/:author', (req, res) => {
    const results = books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
    res.json(results);
});
